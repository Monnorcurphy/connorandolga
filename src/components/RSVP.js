import React, { useState } from 'react';

const RSVPForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        attending: 'yes',
        guests: 0,
        dietaryRestrictions: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // You can add code here to send the data to your backend or Firebase
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-script text-forest-600 mb-4 text-center">RSVP</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-forest-50 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-forest-700 mb-1">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-forest-300 shadow-sm focus:border-forest-500 focus:ring focus:ring-forest-200 focus:ring-opacity-50 px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-forest-700 mb-1">Your Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-forest-300 shadow-sm focus:border-forest-500 focus:ring focus:ring-forest-200 focus:ring-opacity-50 px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="attending" className="block text-sm font-medium text-forest-700 mb-1">Will you be attending?</label>
                    <select
                        name="attending"
                        id="attending"
                        value={formData.attending}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-forest-300 shadow-sm focus:border-forest-500 focus:ring focus:ring-forest-200 focus:ring-opacity-50 px-3 py-2"
                    >
                        <option value="yes">Yes, I'll be there!</option>
                        <option value="no">Sorry, I can't make it</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="guests" className="block text-sm font-medium text-forest-700 mb-1">Number of guests</label>
                    <input
                        type="number"
                        name="guests"
                        id="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        min="0"
                        className="mt-1 block w-full rounded-md border-forest-300 shadow-sm focus:border-forest-500 focus:ring focus:ring-forest-200 focus:ring-opacity-50 px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-forest-700 mb-1">Dietary Restrictions</label>
                    <textarea
                        name="dietaryRestrictions"
                        id="dietaryRestrictions"
                        value={formData.dietaryRestrictions}
                        onChange={handleChange}
                        rows="3"
                        className="mt-1 block w-full rounded-md border-forest-300 shadow-sm focus:border-forest-500 focus:ring focus:ring-forest-200 focus:ring-opacity-50 px-3 py-2"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-forest-500 text-white py-2 px-4 rounded-md hover:bg-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:ring-opacity-50 transition duration-200"
                >
                    Submit RSVP
                </button>
            </form>
        </div>
    );
};

export default RSVPForm;