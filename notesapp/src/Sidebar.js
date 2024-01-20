import NoteList from './NoteList' ;
import Search from './Search' ;
function Sidebar ( {notes, onAddNotes, onDeleteNote, activeNote, setActiveNote, handleSearchNote}){
    return (
       <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button onClick={onAddNotes}>Add</button>
            </div>

            {/* search bbar */}
            <Search handleSearchNote={handleSearchNote} />

            {/*container with list of notes */}
            <NoteList notes={notes} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
       </div>
    )
} ;
export default Sidebar ;