import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../Firebase';
import './Navbar.css';

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate("/login");
            console.log("Signed out successfully");
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Portfolio', path: '/form' },
        { name: 'Login', path: '/login' }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <motion.nav 
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="nav-container">
                <motion.div 
                    className="nav-logo"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/')}
                >
                    <span className="logo-text">Winvester</span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="nav-links">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -1 }}
                        >
                            <span 
                                className="nav-link"
                                onClick={() => navigate(item.path)}
                            >
                                {item.name}
                            </span>
                            {isActive(item.path) && (
                                <motion.div 
                                    className="active-indicator"
                                    layoutId="activeIndicator"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </motion.div>
                    ))}
                    
                    {/* <motion.button
                        className="logout-btn"
                        onClick={handleLogout}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Logout
                    </motion.button> */}
                </div>

                {/* Mobile Menu Button */}
                <motion.div 
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div 
                        className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
                        animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                className={`mobile-nav-item ${isActive(item.path) ? 'active' : ''}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => {
                                    navigate(item.path);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                {item.name}
                            </motion.div>
                        ))}
                        <motion.div
                            className="mobile-nav-item logout"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            onClick={() => {
                                handleLogout();
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            Logout
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
