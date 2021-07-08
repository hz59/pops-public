package com.financeactive.pops.Controllers;

import com.financeactive.pops.Entities.UsersRole;
import com.financeactive.pops.Repositories.UserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path = "/roles")
public class UsersRoleController {
    @Autowired
    // Which is auto-generated by Spring, we will use it to handle the data
    private UserRoleRepository userRoleRepository;

    @RequestMapping(path = "/list", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<UsersRole> getAllRoles() { // return 200 + list
        return userRoleRepository.findAll(); // return all users's role
    }

    @RequestMapping(path = "/add", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity addNewRole(@RequestParam String type,@RequestParam String claims) {

        if(type.isEmpty() && claims == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {

        UsersRole n = new UsersRole();
        n.setType(type);
        n.setClaims(claims);
            userRoleRepository.save(n);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}

