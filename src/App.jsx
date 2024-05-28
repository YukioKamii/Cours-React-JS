
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Course from './pages/Course';
import MainLayout from './components/layouts/MainLayout';

const App = () => {
 return (
    <MainLayout>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Course" element={<Course />} />
       </Routes>
    </MainLayout>
 );
};

export default App;

