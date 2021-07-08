package com.financeactive.pops.Controllers;


import com.financeactive.pops.Entities.Manager;
import com.financeactive.pops.Repositories.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path = "/managers")
public class ManagersController {

    @Autowired
    // Which is auto-generated by Spring, we will use it to handle the data
    private ManagerRepository managerRepository;

    @RequestMapping(path = "/add", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity addManager(@RequestParam String name){
        Manager m = new Manager();
        m.setName(name);
        if(name.isEmpty()){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        managerRepository.save(m);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(path = "/list", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<Manager> getAllManagers() { // return 200 + list
        return managerRepository.findAll();
    }

    @RequestMapping(path = "/delete/{name}", method = RequestMethod.DELETE)
    @ResponseBody
    public ResponseEntity deleteManager(@PathVariable String name)
    {
        List<Manager> managers = managerRepository.findByName(name);
        if(managers.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Manager inbound = managers.get(0);

        managerRepository.delete(inbound);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}