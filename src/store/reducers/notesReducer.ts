import { NotesState, NoteAction, NotesActionTypes, Note } from '../../types/notes';

const initialState: NotesState = {
    notes: []
}

export const notesReducer = (state = initialState, action: NoteAction): NotesState => {
    switch (action.type) {
        case NotesActionTypes.ADD_NOTE:
            return { ...state, notes: [...state.notes, action.payload] };
        case NotesActionTypes.REMOVE_NOTE:
            return { ...state, notes: state.notes.filter((item: Note) => item.id !== action.payload) };    
        default:
            return state
    }
}

export const getAddNoteAction = (note: Note): NoteAction => ({
    type: NotesActionTypes.ADD_NOTE,
    payload: note
});

export const getRemoveNoteAction = (id: String | Number): NoteAction => ({
    type: NotesActionTypes.REMOVE_NOTE,
    payload: id 
});

