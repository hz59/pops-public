package com.financeactive.pops.Repositories;

import com.financeactive.pops.Entities.User;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update , (and Disable)
public interface UserRepository extends CrudRepository<User, Long> {

    Iterable<User> findAll();
    List<User> findById(int id);
    List<User> findByEmailAndPassword(String email, String password);
    List<User> findByManager_name(String manager_name);
//    List<User> findByRole_type(String role_type);
    List<User> findByManager(User manager);
    List<User> findUserByName(String name);
    User findByName(String username);
}


