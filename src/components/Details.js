import React from 'react';
import { Link } from "react-router-dom";


const Details = () => {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-script text-forest-600 mb-4 text-center">Details</h1>
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-forest-800">Key Information</h2>
                <p className="text-forest-700"><strong>Date:</strong> Summer 2026</p>
                <p className="text-forest-700"><strong>Time:</strong> TBD</p>
                <p className="text-forest-700"><strong>Location:</strong> Santa Cruz California</p>
                <p>For more information,  <Link to='/details' className={`text-forest-600 hover:text-forest-800 underline hover:no-underline transition-colors duration-200`}>please go here</Link></p>
                <div>
                    <h2 className="text-2xl font-semibold mb-2 text-forest-800">Current Venues</h2>
                    <p onClick={() => { window.open('https://sparrowvalleyretreat.com/gallery') }}>Sparrow Valley</p>
                    <p onClick={() => { window.open('https://www.nestldown.com/') }}>Nestldown</p>
                    <p onClick={() => { window.open('https://www.sequoiaretreatcenter.com/') }}>Sequoia</p>
                </div>
            </div>
            {/* <h1 className="text-3xl font-script text-pink-600 mb-4 text-center">Wedding Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-pink-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Ceremony</h2>
          <p><strong>Date:</strong> [Ceremony Date]</p>
          <p><strong>Time:</strong> [Ceremony Time]</p>
          <p><strong>Location:</strong> [Ceremony Venue]</p>
          <p><strong>Dress Code:</strong> [Dress Code]</p>
        </div>
        <div className="bg-pink-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Reception</h2>
          <p><strong>Time:</strong> [Reception Time]</p>
          <p><strong>Location:</strong> [Reception Venue]</p>
          <p><strong>Meal Options:</strong> [List meal options]</p>
        </div>
        <div className="bg-pink-50 p-6 rounded-lg shadow-md col-span-full">
          <h2 className="text-2xl font-semibold mb-2">Accommodations</h2>
          <p>[Provide information about nearby hotels or accommodation options]</p>
        </div>
      </div> */}
        </div>
    );
};

export default Details;