import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

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

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const clearAllNotes = () => {
    setNotes([]);
  };

  return (
    <div className={isDarkTheme ? 'app dark' : 'app'}>
      <Navbar
        setSearch={setSearch}
        clearAll={clearAllNotes}
        darkTheme={isDarkTheme}
        changeTheme={changeTheme}
      />
      <NoteInput addNote={addNote} darkTheme={isDarkTheme} />
      <NoteList
        notes={notes}
        deleteNote={deleteNote}
        searchTerm={searchTerm}
        darkTheme={isDarkTheme}
      />
    </div>
  );
};

export default App;
