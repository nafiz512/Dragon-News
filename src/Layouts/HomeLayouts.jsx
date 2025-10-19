import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import LeftAside from "../Components/LeftAside/LeftAside";
import RightAside from "../Components/RightAside/RightAside";

const HomeLayouts = () => {
    return (
        <div className="w-11/12 mx-auto">
            <header>
                <Header></Header>
            </header>
            <Navbar></Navbar>

            <main className=" grid grid-cols-12">
                <aside className=" col-span-3">
                    <h2>All Caterogy</h2>
                    <LeftAside></LeftAside>
                </aside>
                <section className=" col-span-6">
                    <h2>Dragon News Home</h2>
                    <Outlet></Outlet>
                </section>
                <aside className=" col-span-3">
                    <h2>Login with</h2>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;
