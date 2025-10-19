import React from "react";
import swimming from "../../assets/images/swimming.png";
import classes from "../../assets/images/class.png";
import play from "../../assets/images/playground.png";

const QZone = () => {
    return (
        <div className="w-full bg-base-200">
            <h1>Q-Zone</h1>
            <div>
                <img src={swimming} alt="" />
                <img src={classes} alt="" />
                <img src={play} alt="" />
            </div>
        </div>
    );
};

export default QZone;
