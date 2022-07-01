import React from "react";

// components
import AdminNavbar from "/components/Navbars/AdminNavbar.js";
import Sidebar from "/components/Sidebar/Sidebar.js";
import HeaderStats from "/components/Headers/HeaderStats.js";
import FooterAdmin from "/components/Footers/FooterAdmin.js";

export default function Admin({ children }) {
    return (
        <div className="flex">
            <div className="flex-initial">
            <Sidebar />
            </div>
            <div className="relative flex-auto md:ml-64 bg-blueGray-100">
                <div className="pb-32">
                    <AdminNavbar />
                </div>

                {/* Header */}
                {/*<HeaderStats />*/}
                <div className=" px-4 md:px-10 mx-auto w-full -m-24 relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
                    {children}
                    <FooterAdmin />
                </div>
            </div>
        </div>
    );
}
