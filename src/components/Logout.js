import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

const firebaseSignOut = async () => {
    const auth = getAuth();
    try {
        await signOut(auth);
        console.log("User signed out successfully");
        // You can add additional logic here, such as redirecting the user or updating the UI
        return true;
    } catch (error) {
        console.error("Error signing out: ", error);
        // You might want to show an error message to the user
        return false;
    }
};


const Logout = () => {
    const { login, user, isAuthorized, loading, error } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (isAuthorized) {
            const origin = location.state?.from?.pathname || '/';
            navigate(origin);
        }
    }, [isAuthorized, navigate, location]);

    if (loading) {
        return <div className="text-center mt-8">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-8 text-red-600">Error: {error.message}</div>;
    }

    if (!user) {
        console.log('user???');
        return (<Navigate to="/login" replace />)

    }

    return (<div className="relative h-screen w-screen flex flex-col items-center justify-center">
        User not Authorized
        <button onClick={firebaseSignOut} className="bg-forest-500 text-white px-2 py-1 rounded hover:bg-forest-600">
            Logout
        </button>
    </div>
    );
};

export default Logout;