import React, { useEffect, useState } from "react";
import Course from "./Course";
import { Button } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourse=()=>{

    useEffect(()=>{
      document.title="All Courses || Learn Code with Marar";
    },[]);

    // function to call the server
     const getAllCoursesFromServer=()=>{
          axios.get(`${base_url}/courses`).then(
            (response)=>{
               // success
               console.log(response.data);
               toast.success("Courses has been loaded",{
                position:"bottom-left",
               });
               setCourses(response.data);
            },
            (error)=>{
                //error
                console.log(error);
                toast.error("Something went wrong",{
                    position:"bottom-left",
                });
            }
          );
     };

     // calling loading course function
     useEffect(()=>{
         getAllCoursesFromServer();
     },[]);

    const [courses,setCourses]=useState([]);

    const updateCourses=(id)=>{
          setCourses(courses.filter((c)=>c.id!=id));
    };

    return(
       <div>
        <h1 className="text-center">All Courses</h1>
        <p className="text-center">The List of Courses are as follows</p>
         {
            courses.length>0?courses.map((item)=>(
                <Course key={item.id} course={item} update={updateCourses}/>
            )):"No Courses"
         }
       </div>
    )
}

export default AllCourse;
