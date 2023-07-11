import React from "react";
import { Outlet } from "react-router-dom";

// __ __ Components/Helpers __ __ //
import Header from "../main/Header/Header";
import Footer from "../main/Footer/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;