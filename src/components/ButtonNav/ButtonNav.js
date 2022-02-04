import React from "react";
import './ButtonNav.css';
import { Button } from "react-bootstrap";

export const ButtonNav = ({ title }) => {
    return<Button variant="outline-dark">
        {title}
    </Button>  
}