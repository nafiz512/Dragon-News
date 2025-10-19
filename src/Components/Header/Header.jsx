import React from "react";
import logo from "../../assets/images/logo.png";
import { format } from "date-fns";
import LatestNews from "../LatestNews/LatestNews";

const days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
};

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const Header = () => {
    const currentDate = new Date();

    const formattedDate = `${days[currentDate.getDay()]}, ${
        months[currentDate.getMonth()]
    } ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

    return (
        <div className="flex flex-col items-center">
            <img src={logo} className="w-[450px]" />
            <h3>Journalism Without Fear or Favour</h3>
            <p>{formattedDate}</p>
            <p>
                {format(new Date(), "EEEE") +
                    ", " +
                    format(new Date(), "LLLL") +
                    " " +
                    format(new Date(), "dd") +
                    ", " +
                    format(new Date(), "yyyy")}
            </p>
            <div className="bg-base-300 p-2 w-full">
                <LatestNews></LatestNews>
            </div>
        </div>
    );
};

export default Header;
