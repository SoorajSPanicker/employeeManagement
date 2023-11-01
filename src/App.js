
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import AdminHome from './Pages/AdminHome';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Add from './Pages/Add';
import Employees from './Pages/Employees';
import Pnf from './Pages/Pnf';
import View from './Pages/View';
import Edit from './Pages/Edit';






function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/adhome' element={<AdminHome></AdminHome>}></Route>
        <Route path='/add' element={<Add></Add>}></Route>
        <Route path='/emp' element={<Employees></Employees>}></Route>
        <Route path='*' element={<Pnf></Pnf>}></Route>
        <Route path='/view/:id' element={<View></View>}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>

      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
