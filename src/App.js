import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    storedNotes && setNotes(JSON.parse(storedNotes));
  }, []);

  const addNote = async (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((value) => value.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const setSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <Navbar setSearch={setSearch} />
      <NoteInput addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
