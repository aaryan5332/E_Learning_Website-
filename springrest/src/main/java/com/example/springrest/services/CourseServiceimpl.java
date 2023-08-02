package com.example.springrest.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.springrest.dao.CourseDao;
import com.example.springrest.entities.Course;

@Service
public class CourseServiceimpl implements CourseService {
	
	//List<Course> list;
	
	@Autowired
	private CourseDao courseDao;
	
	
	public CourseServiceimpl() { // Constructor
////	   list = new ArrayList<>();
////	 list.add(new Course(145,"Java Core Course","This course contains basics of Java"));
////	 list.add(new Course(4343,"Spring Boot Course","Create Rest API using spring boot"));
	}

	@Override
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
		//return list;
		return courseDao.findAll();
	}

	@Override
	public Course getCourse(long courseId) {
		// TODO Auto-generated method stub
		
//		Course c=null;
//		  for(Course course :list) {
//			  if(course.getId()==courseId) {
//				  c=course;
//				  break;
//			  }
//		  }
		return courseDao.getReferenceById(courseId);
	}

	@Override
	public Course addCourse(Course course) {
		// TODO Auto-generated method stub
		// list.add(course);
		courseDao.save(course);
		return course;
	}



	@Override
	public void deleteCourse(long courseId) {
		
//		for(Course course:list) {
//			if(course.getId()==courseId) list.remove(course);
//		}
		// TODO Auto-generated method stub
		Course temp=courseDao.getReferenceById(courseId);
		  courseDao.delete(temp);
	}

	@Override
	public Course updateCourse(Course course) {
		// TODO Auto-generated method stub
//		  list.forEach(x ->{  // Iterates over the objects
//			  if(x.getId()==course.getId()) { // Id is unique
//				  x.setTitle(course.getTitle());
//				  x.setDescription(course.getDescription());
//			  }
//		  });
		courseDao.save(course); // updates if present or adds it
		return course;
	}

}
