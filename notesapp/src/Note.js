function Note ( {note} ){
    return (
        <div className="app-sidebar-note">
            <div className="sidebar-note-title">
                <strong>{note.title}</strong>
                <button>DELETE </button>
            </div>

            <p>{note.body && note.body.substr(0,50)+ "..."}</p>

            <small className="note-meta">Last Modified: {new Date(note.lastModified).toLocaleDateString("en-GB", {
                hour:"2-digit",
                minute:"2-digit"
            })}</small>
        </div>
    )
}
export default Note ;
