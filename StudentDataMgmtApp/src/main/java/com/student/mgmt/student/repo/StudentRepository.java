package com.student.mgmt.student.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.student.mgmt.student.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

}
