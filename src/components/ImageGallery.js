import React, { useState, useEffect, useRef } from 'react';
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FullScreenImage from './FullSizeImage';


const CustomArrow = ({ direction, onClick }) => (
    <button
        onClick={onClick}
        className={`absolute top-1/2 -translate-y-1/2 ${direction === 'left' ? 'left-2' : 'right-2'} z-10 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200`}
    >
        {direction === 'left' ? <ChevronLeft size={30} /> : <ChevronRight size={30} />}
    </button>
);

const ImageGallery = ({ bucketName, region }) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fullScreenImage, setFullScreenImage] = useState(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        const fetchImages = async () => {
            console.log('Fetching images...');
            console.log('Bucket:', bucketName);
            console.log('Region:', region);

            const client = new S3Client({
                region: region,
                credentials: {
                    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
                    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
                }
            });

            const command = new ListObjectsV2Command({
                Bucket: bucketName,
            });

            try {
                console.log('Sending S3 command...');
                const data = await client.send(command);
                console.log('S3 response:', data);

                if (!data.Contents) {
                    throw new Error('No contents found in the bucket');
                }

                const imageList = data.Contents
                    .filter(item => /\.(jpg|jpeg|png|gif)$/i.test(item.Key))
                    .map(item => ({
                        key: item.Key,
                        url: `https://${bucketName}.s3.${region}.amazonaws.com/${encodeURIComponent(item.Key)}`,
                    }));
                console.log('Processed image list:', imageList);

                setImages(imageList);
                setIsLoading(false);
            } catch (err) {
                console.error("Error fetching images:", err);
                setError(err.message || 'An error occurred while fetching images');
                setIsLoading(false);
            }
        };

        fetchImages();
    }, [bucketName, region]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        beforeChange: (current, next) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        prevArrow: <CustomArrow direction="left" />,
        nextArrow: <CustomArrow direction="right" />,
    };

    const handleImageClick = (image) => {
        setFullScreenImage(image);
    };

    const closeFullScreenImage = () => {
        setFullScreenImage(null);
    };

    if (isLoading) return <div>Loading images...</div>;
    if (error) return <div>Error: {error}</div>;
    if (images.length === 0) return <div>No images found in the bucket.</div>;

    const totalPages = Math.ceil(images.length / settings.slidesToShow);
    const currentPage = Math.floor(currentSlide / settings.slidesToShow) + 1;

    return (
        <div className="max-w-4xl mx-auto relative">
            <Slider ref={sliderRef} {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="px-2 relative">
                        <div className="absolute top-2 left-2 bg-white bg-opacity-75 rounded-full w-8 h-8 flex items-center justify-center">
                            {index + 1}
                        </div>
                        <img
                            src={image.url}
                            alt={`Image ${index + 1}`}
                            className="w-full h-64 object-cover rounded-lg"
                            onClick={() => handleImageClick(image)}
                        />
                    </div>
                ))}
            </Slider>
            <div className="text-center mt-4">
                Page {currentPage} of {totalPages}
            </div>
            {fullScreenImage && (
                <FullScreenImage image={fullScreenImage} onClose={closeFullScreenImage} />
            )}
        </div>
    );
};

export default ImageGallery;