function Note ( {note, onDeleteNote} ){
    return (
        <div className="app-sidebar-note">
            <div className="sidebar-note-title">
                <strong>{note.title}</strong>
               

            </div>

            <p>{note.body && note.body.substr(0,50)+ "..."}</p>

            <div className="note-footer">
                <small className="note-meta">Last Modified: {new Date(note.lastModified).toLocaleDateString("en-GB", {
                    hour:"2-digit",
                    minute:"2-digit"
                })}</small>

                  {/* reference needed to specify which note is to be deleted (i.e. note ID), to ensure the delete does not run automatically
                    the delete function is binded to a arrow function
                */}
                <button onClick={() => onDeleteNote(note.id)}>DELETE</button> 

            </div>
           
        </div>
    )
}
export default Note ;
