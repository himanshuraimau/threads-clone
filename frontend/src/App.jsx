import { Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import {UserPage} from './pages/UserPage.jsx';
//import PostPage from './pages/PostPage.jsx';
import {Header} from './components/Header.jsx';
import AuthPage from './pages/AuthPage.jsx';
import { use } from 'moongose/routes/users.js';
import { useRecoilValue } from 'recoil';
import userAtom  from './atoms/userAtom.jsx';
import  HomePage  from './pages/HomePage.jsx';

function App() {
  const user = useRecoilValue(userAtom);
  return (
    <Container maxW='620px'>
      <Header/>
      <Routes>
      <Route path='/' element={user ? <HomePage /> : <Navigate to='/auth' />} />
        <Route path='/:username' element={<UserPage/>} />
        <Route path='/auth' element={<AuthPage/>} />
       
      </Routes>
    </Container>
  );
}

export default App;
