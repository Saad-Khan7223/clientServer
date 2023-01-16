
import Form from './components/trackerform/Form'
import Card from './components/card/Card'
import Nav from './components/navbar/Nav';
import { Route, Routes } from 'react-router-dom';
import EditExcercise from './components/editExcercise/EditExcercise';
function App() {
  return (
    <div>
    <Nav/>
    <div className=".container-fluid text-center m-3 text-warning"><h1>Excercise Tracker</h1></div>

    <Routes>
   <Route path='/' element={ <Card/> }/>
   <Route path='/create' element={ <Form/>}/>
   <Route path='/edit/:id' element={ <EditExcercise/>}/>
   </Routes>
   </div>
  );
}

export default App;
