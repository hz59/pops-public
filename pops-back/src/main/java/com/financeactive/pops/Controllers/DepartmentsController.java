package com.financeactive.pops.Controllers;


import com.financeactive.pops.Entities.Department;
import com.financeactive.pops.Repositories.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path = "/departments")
public class DepartmentsController {
    @Autowired
    private DepartmentRepository departmentRepository;

    @RequestMapping(path = "/add", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity addDepartment(@RequestParam String libelle) {

        Department d = new Department();
        d.setLibelle(libelle);
        if(libelle.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
            departmentRepository.save(d);
            return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(path = "/list", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<Department> getAllDepartments() {

        return departmentRepository.findAll();
    }

    @RequestMapping(path = "/update/{id}", method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity updateDepartment(@PathVariable String id,
                                     @RequestParam(required = false) String libelle)
    {
        List<Department> departments = departmentRepository.findById(Integer.parseInt(id));
        if(departments.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Department inbound = departments.get(0);
        String intitule;
        intitule = inbound.getLibelle();
        if(libelle == null){ inbound.setLibelle(intitule);}
        if (libelle!=null) {
            inbound.setLibelle(libelle);
        }
        departmentRepository.save(inbound);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
