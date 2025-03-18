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

  return (
    <div className="app-container">
      <form className="note-form">
        <input placeholder="Title" required />
        <textarea placeholder="Content" rows={10} required />

        <button type="submit">Add Note</button>
      </form>
      <div className="notes-grid">
        {notes.map((note) => {
          return (
            <div key={note.id} className="note-item">
              <div className="notes-header">
                <button>x</button>
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