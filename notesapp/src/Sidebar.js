import NoteList from './NoteList' ;
function Sidebar ( {notes, onAddNotes, onDeleteNote}){
    return (
       <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button onClick={onAddNotes}>Add</button>
            </div>
            {/*container with list of notes */}
            <NoteList notes={notes} onDeleteNote={onDeleteNote}/>
       </div>
    )
} ;
export default Sidebar ;