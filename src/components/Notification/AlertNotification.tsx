import "./AlertNotification.css";
import React, { useLayoutEffect, useState } from "react";

/**
 *
 * @param {*} id
 * @param {*} message
 * @param {*} status
 * @param {*} handleClose
 * @returns Alert Box
 */

const AlertNotification = ({ id, message, status, handleClose }) => {
    const [icon] = useState(status === false ? "bxs-bell-ring text-danger" : "bxs-check-circle text-success");
    const [title] = useState(status === false ? "Error" : "Success");
    useLayoutEffect(() => {
        const closeMe = () => {
            handleClose(id);
        };
        let timer = window.setTimeout(closeMe, 5000);
        return () => window.clearTimeout(timer);
    }, [id, handleClose]);

    return (
        <div className={`alert-box d-flex p-2 px-4 justify-content-between align-items-center gap-1 bg-white gap-4`}>
            <div className="d-flex justify-content-center align-items-center">
                <i className={`bx ${icon} fs-8 `}></i>
            </div>
            <div className="">
                <h5>{title}</h5>
                <span> {message} </span>
            </div>
            <div className="d-flex align-items-center justify-content-center bg-secondary text-white border rounded-circle cursor-pointer">
                <i className="bx bx-x fs-7" onClick={() => handleClose(id)}></i>
            </div>
        </div>
    );
};

export default AlertNotification;
