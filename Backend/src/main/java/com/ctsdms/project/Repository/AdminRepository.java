package com.ctsdms.project.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ctsdms.project.Entity.Admin;


@Repository
public interface AdminRepository extends JpaRepository<Admin,Long> {

}
