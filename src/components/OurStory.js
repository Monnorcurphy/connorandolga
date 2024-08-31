import React from 'react';
import ImageGallery from './ImageGallery';


const meetingParagraphs = [
    "Connor and Olga met for the first time on September 21st for dinner in Pasadena at Maestro. In typical fashion, Connor was 5 minutes early, while Olga was 15 minutes late. Over the course of the evening, they discussed politics, economics, medicine, laughed, sang the song Unforgettable and enjoyed their favorite dessert, ice cream, from Wanderlust.",
    "Connor is a native Californian who grew up in Los Angeles but has lived in New York, Jacksonville, and briefly in an RV. Olga is a native Alabamian, who left Birmingham to go to UC Berkeley, returned to Alabama for med school, and then fight her way to Southern California. Together, Olga and Connor have traveled to Oceania, Asia, Europe, and Alabama, along with other parts of the United States.",
    "On a typical week Connor and Olga love spending time with their dog, going to the beach (mostly Olga), learning a new skill or hobby, ranting about the evils of capitalism (mostly Olga), or watching an episode of some bad televsion."
]

const proposalParagraphs = [
    "One month into dating Olga and Connor went on a date in Malibu and discussed the future. The possibility of kids, marriage, and what their life would look like together. Olga said 'I want a private moment between us, and then I want all of my friends to be there after.'",
    "Connor, someone with a flaire for the dramatic and a bit of an ego, wanted to do something very special for Olga. Olga had already been planning a big 30th birthday where all of her friends were going to come down to the beach for a weekend of adventures. In secret, Connor filmed their friends and family asking for their permission, and some trivia questions to make a video for her birthday.",
    "On Friday, June 14th 2024, Connor took Olga to Seal Beach. They walked along the beach and Connor showed her this video, and before he could ask, she said yes:",
]



const YouTubeEmbed = () => {
    return (
        <div className="container mx-auto px-4 my-8">
            <div className="max-w-3xl mx-auto">
                <div className="relative pt-[56.25%]">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/YR9lUMlJyEo?si=PrIQrsV269TzQy8V"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};



const OurStory = () => {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-script text-forest-600 mb-4 text-center">Our Story</h1>
            <div className="bg-forest-50 p-6 rounded-lg shadow-md mt-8">
                <h2 className="text-2xl font-semibold mb-2">How We Met</h2>
                {meetingParagraphs.map((paragraph) => {
                    return (<div style={{ padding: '10px 0px' }}>
                        <p>{paragraph}</p>
                    </div>)
                })}
                <h2 className="text-2xl font-semibold mb-2">The Proposal</h2>
                <p className="mb-4">
                    {proposalParagraphs.map((paragraph) => {
                        return (<div style={{ padding: '10px 0px' }}>
                            <p>{paragraph}</p>
                        </div>)
                    })}
                </p>
                <YouTubeEmbed />
            </div>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Image Gallery</h2>
                <ImageGallery bucketName="connorandolga" region="us-east-2" />
            </section>
        </div>
    );
};

export default OurStory;