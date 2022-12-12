import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Acceuil from './components/Acceuil';
import ListUser from './components/ListUser';
import DetailUser from './components/DetailUser';
import ListTodo from './components/ListTodo';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />}>
            <Route index element={<ListUser/>}>
              <Route path='/detailUser' element={<DetailUser/>}/>
              <Route path='/listeTodo' element={<ListTodo/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;