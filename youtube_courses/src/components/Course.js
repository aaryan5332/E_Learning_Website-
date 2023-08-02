import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router,Route, Routes, Link } from 'react-router-dom';
import Updatecourse from './Updatecourse';
import Allcourses from './Allcourses';
import { 
    Card, 
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
}  from "reactstrap";
import base_url from "../api/bootapi";
import AddCourse from "./Addcourse";

const Course=({course,update})=>{
   
    const deleteCourse=(id)=>{
          axios.delete(`${base_url}/courses/${id}`).then(
              (response)=>{
                 console.log(course);
                toast.success("Course deleted successfully");
                update(id);
              },
             (error)=>{
                console.log(error);
                toast.error("Error! Something happened");
             }
          );
    };

    // const updateCourse=(course)=>{
    //      return(
    //         <Link> </Link>
    //    axios.put(`${base_url}/courses`,course).then(
    //        (response)=>{
    //            console.log(response);
    //            console.log("success");
    //             toast.success("Course updated successfully");
                
    //        },
    //        (error)=>{
    //         console.log(error);
    //         console.log("Error");
    //         toast.error("Error! Something happened");
    //        }
    //    )
    //      );
    // };

    return(
       <Card className="text-center">
        <CardBody>
            <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
           <CardText>{course.description}</CardText>
           <Container className="text-center">
            <Button color="danger" onClick={()=>{
                deleteCourse(course.id);
            }}>Delete</Button>
            <Link to="/update-course" state={course}>
            <Button color="warning ms-3" onClick={()=>{
                // updateCourse(course);
                //  <Routes>
                // <Route path="/view-courses" element={<Allcourses/>} exact/>
                //  </Routes>
            }}>Update</Button>
             </Link> 
           </Container>
        </CardBody>
       </Card>
    );
};

export default Course;