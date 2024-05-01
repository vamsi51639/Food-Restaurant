package com.ctsdms.project.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ctsdms.project.Entity.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact,Long> {

}
