import './App.css';
import { Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import {UserPage} from './pages/UserPage.jsx';
//import {PostPage} from './pages/PostPage.jsx';
import {Header} from './components/Header.jsx';
import AuthPage from './pages/AuthPage.jsx';

function App() {
  return (
    <Container maxW='620px'>
      <Header/>
      <Routes>
     
        <Route path='/:username' element={<UserPage/>} />
        <Route path='/auth' element={<AuthPage/>} />
       
      </Routes>
    </Container>
  );
}

export default App;
