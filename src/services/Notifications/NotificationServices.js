import React, { createContext, useContext, useState } from 'react';

const Notification = ({ message, severity }) => {

    const notificationStyles = {
        position: 'absolute',
        bottom: '50',
        right: '500',
        display: 'flex',
        justifyContent: 'center',
        alignItems:  'center',
        width: 'auto',
        height: 'auto',
        color: 'white',
        padding: '10px 20px 10px 20px'
    }

    const config = true ?
    {
        style: notificationStyles,
        className: severity === 'success' ? 'success' : 'Error'
    } : {}

    return (
        <div {...config}>
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