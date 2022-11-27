import React from "react";
import "./Main.css";

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  };

  if (!activeNote) {
    return <div className="no-active-note">ノートが選択されていません</div>;
  }
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          id="title"
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
          id="detail"
          placeholder="ノートを記入"
          value={activeNote.detail}
          onChange={(e) => onEditNote("detail", e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.detail}</div>
      </div>
    </div>
  );
};

export default Main;
