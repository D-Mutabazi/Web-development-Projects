import Note from './Note'
function NoteList ( {notes , onDeleteNote, activeNote, setActiveNote}) {
    return (
        <div className="app-sidebar-notes">
            {/* for each note in the array output all of its content */}
            {notes.map((note)=>(
                /* individual note displayed with respective components */
                
                <Note key = {note.id} note={note} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote}/>

            ))}

        </div>
    )
}
export default NoteList ;