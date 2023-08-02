import logo from './logo.svg';
import './App.css';
import { Button, Row,Col, Container } from "reactstrap";
import { ToastContainer,toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import AddCourse from './components/Addcourse';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Updatecourse from './components/Updatecourse'

function App() {

    const btnhandle=()=>{
      toast.success("Done",{
        position:'top-center',
      });
    };

  return (
    <div>
    <Router>
    <ToastContainer/>
       <Header/>
     <Container>
      <Row>
        <Col md={4}>
           <Menus/>
        </Col>

        <Col md={8}>
          <Routes>
          <Route path="/" element={<Home/>}/>
        <Route path="/add-course" element={<AddCourse/>} exact/>
        <Route path="/view-courses" element={<Allcourses/>} exact/>
        <Route path="/update-course" element={<Updatecourse/>} exact/>
          </Routes>
        </Col>
      </Row>
     </Container>
    </Router>
    </div>
  );
}

export default App;
