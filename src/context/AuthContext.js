import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [isAuthorized, setIsAuthorized] = useState(false);

    // List of authorized email domains or full email addresses
    const authorizedEmails = ['connorlmurphy@gmail.com', 'user@specific.com'];

    useEffect(() => {
        if (user) {
            const isEmailAuthorized = authorizedEmails.some(email =>
                user.email.endsWith(email) || user.email === email
            );
            setIsAuthorized(isEmailAuthorized);
        } else {
            setIsAuthorized(false);
        }
    }, [user]);

    const login = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error signing in with Google", error);
        }
    };

    const logout = () => signOut(auth);

    return (
        <AuthContext.Provider value={{ user, isAuthorized, login, logout, loading, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);