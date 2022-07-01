import React from "react";

// components

import CardTable from "/components/Cards/CardTable.js";

// layout for page

import Admin from "/layout/Admin.js";

export default function Tables() {
  return (
    <Admin>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </Admin>
  );
}

Tables.layout = Admin;
