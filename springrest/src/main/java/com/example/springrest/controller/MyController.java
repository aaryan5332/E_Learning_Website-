package com.example.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.example.springrest.entities.Course;
import com.example.springrest.services.CourseService;

@RestController
public class MyController {
	
	@Autowired  // Enables loose coupling through dependency injection
	private CourseService courseservice;
	
	@GetMapping("/home")
	public String home() {
		return "Welcome to home page";
	}
	
	// get the courses
	 @CrossOrigin(origins = "http://localhost:3000")
	  @GetMapping("/courses")
	public List<Course> getCourses(){
		return courseservice.getCourses();
	}
	
	  @GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId) {
		return courseservice.getCourse(Long.parseLong(courseId));
	}
	  
	 @CrossOrigin(origins = "http://localhost:3000")
	 @PostMapping("/courses")
	 public Course addCourse(@RequestBody Course course) {
		return courseservice.addCourse(course);
		 
	 }
	 
	 @CrossOrigin(origins = "http://localhost:3000")
	 @PutMapping("/courses")
	 public Course updateCourse(@RequestBody Course course) {
		return courseservice.updateCourse(course);
		 
	 }
	 
	 @CrossOrigin(origins = "http://localhost:3000")
	 @DeleteMapping("/courses/{courseId}")
	 public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId) {
		 try {
		  courseservice.deleteCourse(Long.parseLong(courseId));
		     return new ResponseEntity<>(HttpStatus.OK);
	       }
		 catch(Exception e) {
			 return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		 }
	 }
}
