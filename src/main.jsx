import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './components/App.jsx'
import Veiculo from './components/Veiculo.jsx'
import NavBar from './components/navBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='main-div'>

    <Navbar bg="light" variant="light">
    <Container>
          <Navbar.Brand href="/">Olá</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/veiculos">Veiculos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    
    <BrowserRouter>
    <Routes>
      <Route path='/veiculos' element={<Veiculo/>}/>
      <Route path='/' element={<h1>Ola</h1>}/>
    </Routes>
    </BrowserRouter>
    </div>
  </React.StrictMode>,
)



