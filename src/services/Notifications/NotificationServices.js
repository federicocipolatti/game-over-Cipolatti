import React, { createContext, useContext, useState } from 'react';
import './NotificationServices.css';

const Notification = ({ message, severity }) => {

    const NotificationStyles = {
        position: 'absolute',
        top: '50',
        right: '50',
        display: 'flex',
        justifyContent: 'center',
        alignItems:  'center',
        width: 'auto',
        height: 'auto',
        backgroundColor: severity === 'success' ? 'green' : 'red',
        color: 'white',
        padding: '10px 20px 10px 20px'
    }

    if(message === '') {
        return null;
    }

    return(
        <div style={{NotificationStyles}}>
            {message}
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationServicesProvider = ({ children }) => {
    const [message, setMesagge] = useState('')
    const [severity, setSeverity] =useState('')

    const setNotification = (severity, message) => {
        setMesagge(message)
        setSeverity(severity)
        setTimeout(() => {
            setMesagge('')
        }, 5000)
    }

    return(
        <NotificationContext.Provider value={ setNotification }>
            <Notification message={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificationServices = () => {
    return useContext(NotificationContext)
}