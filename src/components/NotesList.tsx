import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getAddNoteAction, getRemoveNoteAction } from '../store/reducers/notesReducer';
import { Note } from '../types/notes';

const NotesList: React.FC = () => {
    const { notes } = useTypedSelector(state => state.note);
    const [ noteName, setNoteName ] = useState("");

    const dispatch = useDispatch();

    const addNote = (name: any) => {
        const note: Note = {
            name,
            id: Date.now()
        };

        dispatch(getAddNoteAction(note));
    };

    const removeNote = (id: String | Number): void => {
        dispatch(getRemoveNoteAction(id));
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNoteName(e.target.value);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
         
        addNote(noteName);
        setNoteName("");
    }
  
    return (
        <div>
            {notes.map(note => 
                <div key={note.id}>
                    {note.name} 
                    <span onClick={() => removeNote(note.id)}>Remove note</span>
                </div>
            )}
            <form onSubmit={onSubmit}>
                <input type="text" value={noteName} onChange={onInputChange} />
                <button type="submit" disabled={!noteName}>Add note</button>
            </form>
        </div>
    )
};

export default NotesList;
