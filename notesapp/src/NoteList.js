import Note from './Note'
function NoteList ( {notes , onDeleteNote}) {
    return (
        <div className="app-sidebar-notes">
            {/* for each note in the array output all of its content */}
            {notes.map((note)=>(
                /* individual note displayed with respectibve components */
                <Note note={note} onDeleteNote={onDeleteNote}/>

            ))}

        </div>
    )
}
export default NoteList ;