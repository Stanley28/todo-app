import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getAddNoteAction, getRemoveNoteAction } from '../store/reducers/notesReducer';
import { Note } from '../types/notes';

const NotesList: React.FC = () => {
    const { notes } = useTypedSelector(state => state.note);
    const dispatch = useDispatch()

    const addNote = (name: any) => {
        const note: Note = {
            name,
            id: Date.now()
        };

        dispatch(getAddNoteAction(note));
    };

    const removeNote = (id: String | Number) => {
        dispatch(getRemoveNoteAction(id))
    };

    return (
        <div>
            {notes.map(note => 
                <div onClick={() => removeNote(note.id)}>
                    {note.name}
                </div>
            )}
            <button onClick={() => addNote(prompt())}>Add note</button>

        </div>
    )
};

export default NotesList;
