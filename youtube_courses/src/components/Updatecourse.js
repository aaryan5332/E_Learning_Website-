import React,{ Fragment,useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import Course from "./Course";

const Person=(id1)=>{
    
    const [course,setCourse]=useState({});
     // Form handler function
     
     const handleForm=(e)=>{
        console.log(course);
          postDataToServer(course);
        e.preventDefault();
     };
        // id1=useLocation().state;
     const postDataToServer=(course)=>{
        axios.put(`${base_url}/courses`,course).then(
           (response)=>{
             console.log(response);
             console.log("Success");
            toast.success("Course updated successfully");
           },
           (error)=>{
              console.log(error);
              console.log("Error");
              toast.error("Error! Something went wrong");
           }
        );
        // if(course.id!=id1){
        //     setCourse(course.filter((c)=>c.id!=id1));
        // }
     };

    return(
        <Fragment>
        <h1 className="text-center my-3">Update course</h1>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <label for="userId">Course Id</label>
                <Input 
                type="text" 
                placeholder="Enter text here"
                id="userId"
                onChange={(e)=>{
                    setCourse({...course,id:e.target.value});
                }}
                />
            </FormGroup>
            <FormGroup>
                <label for="title">Course Title</label>
                <Input type="text" placeholder="Enter Course title"  id="title"
                    onChange={(e)=>{
                        setCourse({...course,title:e.target.value});
                    }}
                />
            </FormGroup>
            <FormGroup>
                <label for="description">Course Description</label>
                <Input type="textarea" placeholder="Enter course description" id="description" style={{height:100}}
                      onChange={(e)=>{
                        setCourse({...course,description:e.target.value});
                      }}
                />
            </FormGroup>
               
               <Container className="text-center">
                <Button type="submit" color="success">Update Course</Button>
                <Button type="reset" color="warning ms-3">Clear</Button>
               </Container>
        </Form>
    </Fragment>
    );
};

export default Person;