import Note from './Note'
function NoteList ( {notes} ) {
    return (
        <div className="app-sidebar-notes">
            {/* for each note in the array output all of its content */}
            {notes.map((notes)=>(
                /* individual note */
                <Note/>

            ))}

        </div>
    )
}
export default NoteList ;