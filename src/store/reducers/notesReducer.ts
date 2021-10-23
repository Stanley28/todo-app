import { NotesState, NoteAction, NotesActionTypes, Note } from '../../types/notes';
import { NOTES } from '../../constants/localStorageKeys'; 
import localStorageService from '../../utils/localStorageService';

const initialState: NotesState = {
    notes: []
}

export const notesReducer = (state = initialState, action: NoteAction): NotesState => {
    let notes : Array<any>;
    switch (action.type) {
        case NotesActionTypes.ADD_NOTE:
            notes = [...state.notes, action.payload];

            localStorageService.set(NOTES, JSON.stringify(notes));
            
            return { ...state, notes };
        case NotesActionTypes.REMOVE_NOTE:
            notes = state.notes.filter((item: Note) => item.id !== action.payload);

            localStorageService.set(NOTES, JSON.stringify(notes));

            return { ...state, notes }; 
        case NotesActionTypes.SET_NOTES:
            return { ...state, notes: action.payload }
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

export const getSetNotesAction = (notes: Array<any>): NoteAction => ({
    type: NotesActionTypes.SET_NOTES,
    payload: notes
})
