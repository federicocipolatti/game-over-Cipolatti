import React, { createContext, useContext, useState } from 'react';
import './NotificationServices.css'


const Notification = ({ message, severity }) => {
    if (message === '') {
        return null;
    }
    return (
        <div className={severity === 'success' ? 'success' : 'error'}>
            {message}
        </div>
    );
};


const NotificationContext = createContext();


export const NotificationServicesProvider = ({ children }) => {
    const [message, setMesagge] = useState('');
    
    const [severity, setSeverity] = useState('');

    const setNotification = (severity, message) => {
        setMesagge(message);
        setSeverity(severity);
        setTimeout(() => {
            setMesagge('');
        }, 5000);
    };


    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={message} severity={severity} />
            {children}
        </NotificationContext.Provider>
    );
};


export const useNotificationServices = () => {
    return useContext(NotificationContext);
};