import React from "react";
import Sidebar from "./Sidebar";

const Report = () => {
  return <React.Fragment>
    <main style={{display: "flex", height: "100vh"}}>
        <Sidebar />
        <div style={{padding: "1rem"}}> 
            <h1>All Logs: </h1>
        </div>
    </main>
  </React.Fragment>
};

export default Report;
