function Sidebar ( {notes}){
    return (
       <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button>Add</button>
            </div>
            {/*container with list of notes */}
            <div className="app-sidebar-notes">
                {/* individual note */}
                <div className="app-sidebar-note">
                    <div className="sidebar-note-title">
                        <strong>TITLE</strong>
                        <button>DELETE </button>
                    </div>

                    <p>Note Preview</p>

                    <small className="note-meta">Last modified [date]</small>
                </div>

            </div>
       </div>
    )
} ;
export default Sidebar ;