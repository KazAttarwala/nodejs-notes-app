import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/notes', async (req, res) => {
  res.json([
    { id: 1, title: 'Note 1', content: 'This is the first note.' },
    { id: 2, title: 'Note 2', content: 'This is the second note.' },
    { id: 3, title: 'Note 3', content: 'This is the third note.' },
    { id: 4, title: 'Note 4', content: 'This is the fourth note.' },
    { id: 5, title: 'Note 5', content: 'This is the fifth note.' },
  ]);
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:3000');
});

