import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

function Layout() {
  return (
    <>
      <div className="flex">
        <Sidebar/>
        <section className="bg-blue-300 flex-grow">
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default Layout;
