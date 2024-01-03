function Note (){
    return (
        <div className="app-sidebar-note">
            <div className="sidebar-note-title">
                <strong>TITLE</strong>
                <button>DELETE </button>
            </div>

            <p>Note Preview</p>

            <small className="note-meta">Last modified [date]</small>
        </div>
    )
}
export default Note ;
