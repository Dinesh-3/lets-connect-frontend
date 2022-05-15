import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect, FC } from "react";

import "./AlertNotification.css";

type FadeProps = {
    show: boolean;
    children: React.ReactElement;
    onUnmount?: Function;
};

const Fade: FC<FadeProps> = ({ show, children, onUnmount }) => {
    const [shouldRender, setRender] = useState(show);

    useEffect(() => {
        show && setRender(show);
    }, [show]);

    const animationEnd = () => {
        if (!show) setRender(false);
        onUnmount && onUnmount();
    };

    return (
        shouldRender && (
            <div
                className={`${show ? "fadeIn" : "fadeOutSlide"}`}
                style={{ zIndex: "500" }}
                //@ts-ignore
                show={show.toString()}
                onAnimationEnd={animationEnd}
            >
                {children}
            </div>
        )
    );
};

export default Fade;
