import React,{ Fragment,useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
const AddCourse=()=>{
    useEffect(()=>{
        document.title="Add Course || Learn Code with Marar";
    },[])

    const [course,setCourse]=useState({});
     // Form handler function
      const handleForm=(e)=>{
         console.log(course);
           postDataToServer(course);
         e.preventDefault();
      };

      // creating fuction to post data on server
        const postDataToServer=(course)=>{
             axios.post(`${base_url}/courses`,course).then(
                (response)=>{
                  console.log(response);
                  console.log("Success");
                  toast.success("Course added successfully");
                },
                (error)=>{
                   console.log(error);
                   console.log("Error");
                   toast.error("Error! Something went wrong");
                }
             );

        }

    return(
        <Fragment>
            <h1 className="text-center my-3">Fill Course details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input 
                    type="text" 
                    placeholder="Enter course Id here"  
                    id="userId"
                    onChange={(e)=>{
                        setCourse({...course,id:e.target.value});
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here"  id="title"
                        onChange={(e)=>{
                            setCourse({...course,title:e.target.value});
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter course description here" id="description" style={{height:100}}
                          onChange={(e)=>{
                            setCourse({...course,description:e.target.value});
                          }}
                    />
                </FormGroup>
                   
                   <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button type="reset" color="warning ms-3">Clear</Button>
                   </Container>
            </Form>
        </Fragment>
    );
};

export default AddCourse;