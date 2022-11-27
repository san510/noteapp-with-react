import React from "react";
import { format } from "date-fns";

import "./Sidebar.css";

const Sidebar = ({
  onAddNote,
  notes,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Note</h1>
        <button onClick={onAddNote}>add</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>Delete</button>
            </div>
            <p>{note.detail}</p>
            <small>{format(note.modDate, "yyyy/MM/dd HH:mm")}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
