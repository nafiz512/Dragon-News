import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";

const HomeLayouts = () => {
    return (
        <div className="w-11/12 mx-auto">
            <header>
                <Header></Header>
            </header>
            <Navbar></Navbar>
            <main>
                <section className="left_nav"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right_nav"></section>
            </main>
        </div>
    );
};

export default HomeLayouts;
