import './App.css';
import Sidebar from './Sidebar' ;
import Main from './Main'
import { useState } from 'react';
// all information and states are to be stored in App because of the hierachy, if stored in any other component,
// it would may not be accessible to others


function App() {
  const [notes, setNotes] = useState([]) ; //list of notes
  return (
    <div className="App">
      <Sidebar notes={notes}/>

      <Main/>
    
    </div>

  );
}

export default App;
