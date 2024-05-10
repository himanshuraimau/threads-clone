import { Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import {UserPage} from './pages/UserPage.jsx';
//import PostPage from './pages/PostPage.jsx';
import {Header} from './components/Header.jsx';
import AuthPage from './pages/AuthPage.jsx';

import { useRecoilValue } from 'recoil';
import userAtom  from './atoms/userAtom.jsx';
import  HomePage  from './pages/HomePage.jsx';

function App() {
  const user = useRecoilValue(userAtom);
  return (
    <Container maxW='620px'>
      <Header/>
      <Routes>
      <Route path='/' element={user ? <HomePage /> :<Navigate to='/auth' />} />
      <Route path='/auth' element={!user ? <AuthPage/> : <Navigate to='/' />} />
        <Route path='/:username' element={<UserPage/>} />
        
       
      </Routes>
    </Container>
  );
}

export default App;
