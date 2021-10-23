export interface NotesState {
    notes: Array<any>
}

export enum NotesActionTypes {
    ADD_NOTE = 'ADD_NOTE',
    SET_NOTES = 'SET_NOTES',
    REMOVE_NOTE = 'REMOVE_NOTE'
}

interface AddNoteAction {
    type: NotesActionTypes.ADD_NOTE,
    payload: Object 
}

interface SetNotesAction {
    type: NotesActionTypes.SET_NOTES,
    payload: Array<any>
}

interface RemoveNoteAction {
    type: NotesActionTypes.REMOVE_NOTE
    payload: String | Number
}

export interface Note {
    id: String | Number,
    name: String
}

export type NoteAction = AddNoteAction | RemoveNoteAction | SetNotesAction