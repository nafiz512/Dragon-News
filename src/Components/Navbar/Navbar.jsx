import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100  flex justify-between">
                <div className=""></div>
                <div>
                    <ul
                        tabIndex="-1"
                        className="menu flex flex-row dropdown-content  rounded-box z-1 mt-3  p-2 "
                    >
                        <li>
                            <a className="justify-between">Home</a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-2">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary">Log in </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
