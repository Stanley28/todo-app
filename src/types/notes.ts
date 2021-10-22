export interface NotesState {
    notes: any[]
}

export enum NotesActionTypes {
    ADD_NOTE = 'ADD_NOTE',
    REMOVE_NOTE = 'REMOVE_NOTE'
}

interface AddNoteAction {
    type: NotesActionTypes.ADD_NOTE,
    payload: Object 
}

interface RemoveNoteAction {
    type: NotesActionTypes.REMOVE_NOTE
    payload: String | Number
}

export interface Note {
    id: String | Number,
    name: String
}

export type NoteAction = AddNoteAction | RemoveNoteAction