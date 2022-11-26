import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Note</h1>
        <button>add</button>
      </div>
      <div className="app-sidebar-notes">
        <div className="app-sidebar-note">
          <div className="sidebar-note-title">
            <strong>Title</strong>
            <button>Delete</button>
          </div>
          <p>Note Detail</p>
          <small>last modifying date:xx/xx</small>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
