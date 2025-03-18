import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([{
    id: 1,
    title: "Note 1",
    content: "This is the content of note 1",
  },

    {
      id: 2,
      title: "Note 2",
      content: "This is the content of note 2",
    },
    {
      id: 3,
      title: "Note 3",
      content: "This is the content of note 3",
    },
    {
      id: 4,
      title: "Note 4",
      content: "This is the content of note 4",
    },]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);

  const handleAddNote = (e) => {
    e.preventDefault();
    if (title && content) {
      setNotes([...notes, { id: notes.length + 1, title, content }]);
      setTitle("");
      setContent("");
    }
  }

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  }

  const handleUpdateNote = (e) => {
    e.preventDefault();
    if (selectedNote) {
      setNotes(notes.map((note) => {
        if (note.id === selectedNote.id) {
          return { ...note, title, content };
        }
        return note;
      }));
      setSelectedNote(null);
      setTitle("");
      setContent("");
    }
  }

  const handleCancel = () => {
    setSelectedNote(null);
    setTitle("");
    setContent("");
  }

  const handleDelete = (event, id) => {
    event.stopPropagation();
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div className="app-container">
      <form className="note-form" onSubmit={(event) => (selectedNote ? handleUpdateNote(event) : handleAddNote(event))}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          required
        />
        <button type="submit">{selectedNote ? "Update Note" : "Add Note"}</button>
        {selectedNote && <button type="button" onClick={handleCancel}>Cancel</button>}
      </form>
      <div className="notes-grid">
        {notes.map((note) => {
          return (
            <div key={note.id} className="note-item" onClick={() => handleNoteClick(note)}>
              <div className="notes-header">
                <button onClick={(event) => handleDelete(event, note.id)}>x</button>
              </div>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;