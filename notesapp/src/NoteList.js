import Note from './Note'
function NoteList ( {notes} ) {
    return (
        <div className="app-sidebar-notes">
            {/* for each note in the array output all of its content */}
            {notes.map((note)=>(
                /* individual note displayed with respectibve components */
                <Note note={note}/>

            ))}

        </div>
    )
}
export default NoteList ;