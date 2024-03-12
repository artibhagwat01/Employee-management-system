package employee_management_system.adminRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import employee_management_system.adminModel.adminModel;



@Repository
public interface adminRepository extends JpaRepository<adminModel, Long> {

}