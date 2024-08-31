import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import OurStory from './components/OurStory';
import Details from './components/Details';
import RSVP from './components/RSVP';
import CSVUpload from './components/CSVUpload';
import Calendar from './components/EventCalendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './globals';
import SignIn from './components/SignIn';
import LogOut from './components/Logout';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';



const ProtectedRoute = ({ children }) => {
  const { loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return children;
};

const AdminRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const protectedEmails = process.env.REACT_APP_PROTECTED_EMAILS
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!protectedEmails.includes(user?.email)) {
    // Save the current location they were trying to go to
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};


function App() {
  const [user, loading] = useAuthState(auth);

  const thereIsAUser = user ? true : false
  const emailIsAuthorized = user ? process.env.REACT_APP_AUTHORIZED_EMAILS.includes(user.email) : false

  return (
    <Router>
      <AuthProvider>
        <div className="App flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route
                path="/login"
                element={thereIsAUser ? <Navigate to="/" replace /> : <SignIn />}
              />
              <Route
                path="/"
                element={emailIsAuthorized ? <Home /> : <Navigate to="/login" replace />}
              />
              <Route path="/login" element={<SignIn />} />
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/logout" element={<LogOut />} />
              <Route path="/our-story" element={<ProtectedRoute><OurStory /></ProtectedRoute>} />
              <Route path="/details" element={<ProtectedRoute><Details /></ProtectedRoute>} />
              <Route path="/rsvp" element={<ProtectedRoute><RSVP /></ProtectedRoute>} />
              <Route path="/calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
              <Route path="/CSVUpload" element={<AdminRoute><CSVUpload /></AdminRoute>} />

            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;