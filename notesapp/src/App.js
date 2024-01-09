import './App.css';
import Sidebar from './Sidebar' ;
import Main from './Main'
import { useState } from 'react';
import uuid from 'react-uuid' ;
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Test from './Test' ;
// all information and states are to be stored in App because of the hierachy, if stored in any other component,
// it would may not be accessible to others


function App() {
  const [notes, setNotes] = useState([]) ; //list of notes stored in array
  const [activeNote, setActiveNote] = useState(false) ; //Note clicked on is set to active and its state is saved

  
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


  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path='/'>
            <Sidebar notes={notes} 
                onAddNotes={onAddNotes} 
                onDeleteNote={onDeleteNote} 
            />
          </Route>

          <Route path='/editNote'>
            <Main/>
          </Route>

        </Switch>
    </div>

    </Router>
    

  );
}

export default App;
