import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
const App = () => {
  const [notes, setNotes] = useState([]);

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

  const searchNote = (searchTerm) => {
    // searchTerm !== '' &&
    //   setNotes(notes.filter((value) => value.note.title.includes(searchTerm)));
    //cant perform the change here. need to do it in the nav
  };

  return (
    <div>
      <Navbar />
      <NoteInput addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
