import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
import Read from './components/Read';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/create' element={<Create></Create>}></Route>
  <Route path='/update/:id' element={<Update></Update>}></Route>
  <Route path='/read/:id' element={<Read></Read>}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
