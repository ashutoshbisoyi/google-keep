import React, { useState } from 'react';
import { v4 } from 'uuid';
import { ClickAwayListener, TextareaAutosize } from '@material-ui/core';
const NoteInput = ({ addNote }) => {
  const [isTitle, setIsTitle] = useState(false);
  const [note, setNote] = useState({
    title: '',
    body: '',
  });

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const add = (e) => {
    e.preventDefault();
    if (note.title === '' && note.body === '') {
      setIsTitle(false);
    } else {
      const newNote = {
        note,
        id: v4(),
      };
      addNote(newNote);
      setNote({
        title: '',
        body: '',
      });
      setIsTitle(false);
    }
  };

  return (
    <section className='input-section'>
      <ClickAwayListener onClickAway={add}>
        <form onSubmit={add} className='input-container'>
          {isTitle && (
            <input
              name='title'
              type='text'
              placeholder='Title'
              value={note.title}
              onChange={(e) => handleInputChange(e)}
            />
          )}
          <TextareaAutosize
            aria-label='empty textarea'
            name='body'
            placeholder='Take a note...'
            value={note.body}
            onClick={() => setIsTitle(true)}
            onChange={(e) => handleInputChange(e)}
          />
          {isTitle && <button onClick={add}>Add</button>}
        </form>
      </ClickAwayListener>
    </section>
  );
};

export default NoteInput;
