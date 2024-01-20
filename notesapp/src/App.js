import './App.css';
import Sidebar from './Sidebar' ;
import Main from './Main'
import { useEffect, useState } from 'react';
import uuid from 'react-uuid' ;
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// all information and states are to be stored in App because of the hierachy, if stored in any other component,
// it would may not be accessible to others


function App() {
  const [notes, setNotes] = useState( localStorage.notes ? JSON.parse(localStorage.notes) : []) ; //list of notes stored in array
  const [activeNote, setActiveNote] = useState(false) ; //Note clicked on is set to active and its state is saved

  console.log(notes)
  useEffect( () =>{
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes]);
  /**
   * will add a note object to the notes array/state
   */
  const onAddNotes = () =>{
    const newNote ={
      id: uuid() ,
      title: "Untitled Note",
      body: "",
      lastModified: Date.now() 
    } ;

    setNotes([newNote, ...notes] ) ; //append new note to existing notes array
  } ;

  /**
   * 
   * @param {param0} idToDelete - note to be deleted id
   * iterate through the notes, a note that has the same id as the idToDelete is deleted and the rest of the notes is kept
   * based on how the esx function FILTER works
   */
  const onDeleteNote = (idToDelete) =>{
    setNotes(notes.filter((note)=> note.id !== idToDelete))
  } ;

  /**
   * get the information for the active note using its id returning the active note to be edited
   * @returns current the active note (object)to be edited
   */
  const getActiveNote = () =>{
    if(activeNote){
      return notes.find((note) => note.id === activeNote); 
    }
  }

  /**
   * updates the notes array with the current note that is being edited
   * @param {*} updatedNoted to replace the note id that is the current active note
   */
  const onUpdateNote = (updatedNote) =>{

    const onUpdatedNotesArray = notes.map((note) => {
      if(note.id === activeNote){
        return updatedNote ; // updates the information for the current active note 
      };

      return note ; 
    }) ;

    setNotes(onUpdatedNotesArray) ; //replace current note Array 

  } ; 

  const [searchText, setSearchText] = useState('') ;
  console.log(searchText) ;

  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path='/'>
            <Sidebar notes={notes.filter((note)=>note.title.toLowerCase().includes(searchText))}
                onAddNotes={onAddNotes} 
                onDeleteNote={onDeleteNote}
                activeNote={activeNote}
                setActiveNote={setActiveNote}

                handleSearchNote = {setSearchText} 
            />
          </Route>

          <Route path='/edit-note/:id'>
            <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
          </Route>

        </Switch>
    </div>

    </Router>
    

  );
}

export default App;
