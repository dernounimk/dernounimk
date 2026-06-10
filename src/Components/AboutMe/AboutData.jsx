import React from 'react';
import { motion } from 'framer-motion';

function AboutData({ mood }) {
    const code = "</>";
    
    const dataItems = [
        { id: 1, icon: code, title: "Experience", subtitle: "3+ Years Working", customIcon: true },
        { id: 2, icon: "uil uil-check-circle", title: "Completed", subtitle: "+25 Projects", customIcon: false },
        { id: 3, icon: "uil uil-users-alt", title: "Clients", subtitle: "3 Satisfied", customIcon: false },
        { id: 4, icon: "uil uil-clock-eight", title: "Support", subtitle: "Online 24/8", customIcon: false }
    ];

    const boxVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.4 }
        }),
        hover: {
            y: -5,
            transition: { duration: 0.2 }
        }
    };

    return (
        <div className="stats-grid">
            {dataItems.map((item, i) => (
                <motion.div 
                    key={item.id}
                    className={`stat-box ${mood}`}
                    custom={i}
                    variants={boxVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                >
                    <div className="stat-icon-wrapper">
                        {item.customIcon ? (
                            <i className="code-icon">{item.icon}</i>
                        ) : (
                            <i className={item.icon} />
                        )}
                    </div>
                    <div className="stat-content">
                        <h3 className="stat-title">{item.title}</h3>
                        <p className='stat-subtitle'>{item.subtitle}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default AboutData;