import './App.css';
import Sidebar from './Sidebar' ;
import Main from './Main'
import { useState } from 'react';
import uuid from 'react-uuid' ;
// all information and states are to be stored in App because of the hierachy, if stored in any other component,
// it would may not be accessible to others


function App() {
  const [notes, setNotes] = useState([]) ; //list of notes stored in array
  
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
  return (
    <div className="App">
      <Sidebar notes={notes} onAddNotes={onAddNotes} />

      <Main/>
    
    </div>

  );
}

export default App;
