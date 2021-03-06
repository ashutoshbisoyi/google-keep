import { IconButton, TextareaAutosize, Tooltip } from '@material-ui/core';
import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { AiFillSave } from 'react-icons/ai';
import bulb from '../assets/bulb.svg';
const NoteList = ({ notes, deleteNote, searchTerm, darkTheme }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');

  const handleChange = (e, value) => {
    noteTitle === '' && setNoteTitle(value.note.title);
    noteBody === '' && setNoteBody(value.note.body);
    e.target.name === 'title'
      ? setNoteTitle(e.target.value)
      : setNoteBody(e.target.value);
  };

  const editNote = (id) => {
    if (noteTitle !== '' || noteBody !== '') {
      const data = JSON.parse(localStorage.getItem('notes'));
      data.map((value) => {
        if (id === value.id) {
          value.note.title = noteTitle;
          value.note.body = noteBody;
        }
      });
      localStorage.setItem('notes', JSON.stringify(data));
      setNoteTitle('');
      setNoteBody('');
    }
  };

  return (
    <>
      {notes.length !== 0 ? (
        <div className={darkTheme ? 'note-container dark' : 'note-container'}>
          {notes
            .filter((value) => {
              if (searchTerm === '' || searchTerm.length < 2) {
                return value;
              } else {
                return value.note.title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
              }
            })
            .map((value) => {
              return (
                <div className='card' key={value.id}>
                  {value.note.title && (
                    <TextareaAutosize
                      type='text'
                      name='title'
                      defaultValue={value.note.title}
                      onChange={(e) => {
                        handleChange(e, value);
                      }}
                      className='title'
                    />
                  )}
                  {value.note.body && (
                    <TextareaAutosize
                      type='text'
                      name='body'
                      defaultValue={value.note.body}
                      onChange={(e) => {
                        handleChange(e, value);
                      }}
                      className='body'
                    />
                  )}
                  <br />
                  <div className='options'>
                    <Tooltip title='Save'>
                      <IconButton
                        aria-label='save'
                        className='save'
                        onClick={() => editNote(value.id)}
                      >
                        <AiFillSave className='icon' />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title='Delete'>
                      <IconButton
                        aria-label='delete'
                        className='delete'
                        onClick={() => deleteNote(value.id)}
                      >
                        <MdDelete className='icon' />
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div className='blank'>
          <div>
            <img src={bulb} alt='no note' />
            <h4>Notes you add appear here</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteList;
