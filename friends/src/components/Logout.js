import React, { useEffect } from "react";
import axiosWithAuth from './../utils/axiosWithAuth';


const Logout = (props) => {

    useEffect(() => {
        axiosWithAuth()
            .post('http://localhost:5000/api/logout')
    })
}

