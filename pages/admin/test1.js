import React from "react";

// layout for page

import Admin from "/layout/Admin.js";

export default function Dashboard() {
    return (
        <>
            <Admin>
                <div className="container">
                            <h1>Test 1</h1>
                </div>
            </Admin>

        </>
    );
}

Dashboard.layout = Admin;
