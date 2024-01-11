import Note from './Note'
function NoteList ( {notes , onDeleteNote, activeNote, setActiveNote}) {
    
    // notes sorted in descending order (most recent first)
    const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified ) ;
    
    return (
        <div className="app-sidebar-notes">
            {/* for each note in the array output all of its content */}
            {sortedNotes.map((note)=>(
                /* individual note displayed with respective components */
                
                <Note key = {note.id} note={note} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote}/>

            ))}

        </div>
    )
}
export default NoteList ;