import express from 'express';
import cors from 'cors';
import NoteRepository from './models/NoteRepository.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/notes', async (req, res) => {
    try {
        const notes = await NoteRepository.getAllNotes();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch notes' });
    }
});

app.post('/api/notes', async (req, res) => {
    const { title, content } = req.body;
    try {
        const newNote = await NoteRepository.createNote(title, content);
        res.status(201).json(newNote);
    } catch (error) {
        console.error('Error creating note:', error);
        res.status(500).json({ error: 'Failed to create note' });
    }
})

app.put('/api/notes/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const updatedNote = await NoteRepository.updateNote(id, title, content);
        res.json(updatedNote);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update note' });
    }
}
);

app.delete('/api/notes/:id', async(req, res) => {
  const {id} = req.params;

  try {
    const deleteNote = await NoteRepository.deleteNote(id);
    res.json(deleteNote);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete note' });
    console.error('Error deleting note:', error);
  }
})

app.listen(5001, () => {
    console.log('Server is running on http://localhost:5001');
});

