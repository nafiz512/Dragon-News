import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import FindUsOn from "../FindUsOn/FindUsOn";
import QZone from "../QZone/QZone";
import bg from "../../assets/images/bg.png";

const RightAside = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUsOn></FindUsOn>
            <QZone></QZone>
            <div>
                <h1>Ads Corner</h1>
                <img className="w-full" src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightAside;
