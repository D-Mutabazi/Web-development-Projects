import { useHistory } from 'react-router-dom' ;

function Note ( {note, onDeleteNote, activeNote, setActiveNote} ){
  
    const history  = useHistory() ;

    const handleEditNote = () =>{

        history.push(`/edit-note/${note.id}`)
    }
    return (
        <div className= {`app-sidebar-note ${note.id === activeNote && "active"}`}onClick={ () => setActiveNote(note.id)}>
            {console.log(activeNote.title)}
            <div className="sidebar-note-title">
                <strong>{note.title}</strong>
               
                <button onClick = { handleEditNote }>EditNote</button>{/* Button to navigate to the edit-note route */}

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
