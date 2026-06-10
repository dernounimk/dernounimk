import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AboutMe.css';
import AboutData from './AboutData.jsx';
import CV from '../../assets/Dernouni.pdf';

function AboutMe({ mood }) {
    const [activeTimelineTab, setActiveTimelineTab] = useState('education');
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const timelineData = {
        education: [
            {
                id: 1,
                title: "University of Mohamed Khider Biskra",
                subtitle: "Bachelor in Computer Science",
                period: "2023 - Present",
                description: "Studying advanced algorithms, data structures, and software engineering principles.",
                icon: "uil-graduation-cap",
                isCurrent: true,
                tags: ["Computer Science", "Algorithms", "Software Engineering"]
            },
            {
                id: 2,
                title: "Self-Learning Journey",
                subtitle: "Full Stack Web Development",
                period: "2021 - Present",
                description: "Mastering MERN stack through online courses and hands-on projects.",
                icon: "uil-book-open",
                isCurrent: false,
                tags: ["MERN Stack", "Online Learning", "Projects"]
            }
        ],
        experience: [
            {
                id: 1,
                title: "Fiverr Freelancer",
                subtitle: "Full Stack Web Developer",
                period: "2023 - Present",
                description: "Building responsive websites and web applications for international clients.",
                icon: "uil-briefcase-alt",
                isCurrent: true,
                tags: ["Freelance", "Web Development", "MERN Stack"]
            },
            {
                id: 2,
                title: "Khamasat Platform",
                subtitle: "Freelance Developer",
                period: "2023 - Present",
                description: "Creating custom solutions for various business needs.",
                icon: "uil-window",
                isCurrent: false,
                tags: ["CMS", "E-commerce", "Business Solutions"]
            }
        ]
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.5
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        },
        hover: {
            y: -5,
            transition: { duration: 0.2 }
        }
    };

    const currentTimelineData = timelineData[activeTimelineTab];

    return (
        <section className="section about-me" id='about'>
            {isVisible && (
                <>
                    <div className="floating-shape shape-1" />
                    <div className="floating-shape shape-2" />
                </>
            )}

            <div className="section-header about-header">
                <div className="title-wrapper">
                    <motion.h2 
                        className='section-title'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span>About</span>
                        <span className="highlight-word">Me</span>
                    </motion.h2>
                </div>
                <motion.span 
                    className='section-subtitle'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Developer & Creative Problem Solver
                </motion.span>
                <div className="animated-underline" />
            </div>

            <motion.div 
                className="about-container container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Introduction Card */}
                <motion.div 
                    className="intro-card"
                    variants={cardVariants}
                    whileHover="hover"
                >
                    <div className="intro-header">
                        <div className="avatar-container">
                            <div className="avatar">
                                <i className="uil uil-user-circle"></i>
                            </div>
                            <div className="avatar-ring" />
                        </div>
                        <div className="intro-text">
                            <h3 className="intro-title">
                                Hi, I'm <span className="highlight-name">Dernouni MK</span>
                            </h3>
                            <p className="intro-subtitle">MERN Stack Developer & Web Solutions Architect</p>
                        </div>
                    </div>

                    <p className="intro-description">
                        Passionate full-stack developer with 3+ years of experience creating 
                        innovative web solutions. Specializing in building dynamic, responsive applications 
                        with focus on performance, scalability, and exceptional user experiences.
                    </p>

                    <div className="animated-divider" />

                    <div className="stats-container">
                        <AboutData mood={mood} />
                    </div>

                    <div className="action-buttons">
                        <motion.a 
                            download="" 
                            href={CV} 
                            className={`btn btn-primary btn-${mood}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <i className="uil uil-import" />
                            Download CV
                        </motion.a>
                        <motion.a 
                            href='mailto:dernounimk@gmail.com' 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className={`btn btn-outline-${mood}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <i className="uil uil-envelope" />
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>

                {/* Timeline Section */}
                <motion.div 
                    className="timeline-card"
                    variants={cardVariants}
                    whileHover="hover"
                >
                    <div className="timeline-header">
                        <div className="timeline-title-container">
                            <h3 className="timeline-title">My Journey Timeline</h3>
                            <p className="timeline-subtitle">Education & Experience</p>
                        </div>
                        
                        <div className="timeline-tabs">
                            <motion.button
                                className={`timeline-tab ${activeTimelineTab === 'education' ? 'active' : ''}`}
                                onClick={() => setActiveTimelineTab('education')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <i className="uil uil-graduation-cap" />
                                Education
                            </motion.button>
                            <motion.button
                                className={`timeline-tab ${activeTimelineTab === 'experience' ? 'active' : ''}`}
                                onClick={() => setActiveTimelineTab('experience')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <i className="uil uil-briefcase-alt" />
                                Experience
                            </motion.button>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div 
                            className="timeline-content"
                            key={activeTimelineTab}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {currentTimelineData.map((item, index) => (
                                <motion.div 
                                    className="timeline-item"
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="timeline-item-header">
                                        <div className="timeline-icon">
                                            <i className={item.icon}></i>
                                        </div>
                                        <div className="timeline-item-info">
                                            <h4 className="timeline-item-title">{item.title}</h4>
                                            <span className="timeline-item-subtitle">{item.subtitle}</span>
                                        </div>
                                        {item.isCurrent && <span className="current-badge">Current</span>}
                                    </div>
                                    
                                    <p className="timeline-item-description">{item.description}</p>
                                    
                                    <div className="timeline-footer">
                                        <div className="timeline-period">
                                            <i className="uil uil-calendar-alt" />
                                            <span>{item.period}</span>
                                        </div>
                                        <div className="timeline-tags">
                                            {item.tags.map((tag) => (
                                                <span key={tag} className="timeline-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* Call to Action */}
                <motion.div 
                    className="cta-card"
                    variants={cardVariants}
                    whileHover={{ y: -5 }}
                >
                    <div className="cta-content">
                        <h3 className="cta-title">Ready to Bring Your Vision to Life?</h3>
                        <p className="cta-description">
                            Let's collaborate on your next project. Available for freelance work 
                            and passionate about creating exceptional digital experiences.
                        </p>
                        <div className="cta-buttons">
                            <motion.a 
                                href='#contact' 
                                className={`btn btn-primary btn-${mood}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <i className="uil uil-message" />
                                Start a Project
                            </motion.a>
                            <motion.a 
                                href='#portfolio' 
                                className={`btn btn-outline-${mood}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <i className="uil uil-eye" />
                                View Portfolio
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default AboutMe;