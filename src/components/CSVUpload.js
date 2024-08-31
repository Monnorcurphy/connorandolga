import React, { useState } from 'react';
import { uploadGuestsFromCSV } from '../utilities/csvUpload';

const CSVUpload = () => {
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file first!');
            return;
        }

        try {
            setUploadStatus('Uploading...');
            const result = await uploadGuestsFromCSV(file);
            setUploadStatus(`Upload complete. ${result.uploadedCount} guests added, ${result.skippedCount} skipped (already exist).`);
        } catch (error) {
            console.error('Error uploading CSV:', error);
            setUploadStatus('Error uploading CSV. Please check the console for details.');
        }
    };

    return (
        <div className="mt-8 p-6 bg-forest-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-script text-forest-600 mb-4">Upload Guest List</h2>
            <input
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="mb-4 block w-full text-sm text-forest-700
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-forest-50 file:text-forest-700
          hover:file:bg-forest-100"
            />
            <button
                onClick={handleUpload}
                className="bg-forest-500 text-white py-2 px-4 rounded-md hover:bg-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:ring-opacity-50 transition duration-200"
            >
                Upload CSV
            </button>
            {uploadStatus && <p className="mt-4 text-forest-700">{uploadStatus}</p>}
        </div>
    );
};

export default CSVUpload;