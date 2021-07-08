package com.financeactive.pops.Controllers;

import com.financeactive.pops.Entities.BusinessUnit;
import com.financeactive.pops.Repositories.BusinessUnitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8080",maxAge = 3600)
@Controller
@RequestMapping(path = "/bu")
public class BusinessUnitsController {
    @Autowired
    private BusinessUnitRepository businessUnitRepository;

    @RequestMapping(path = "/add", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity addBusinessUnit(@RequestParam String libelle) {

        BusinessUnit b = new BusinessUnit();
        b.setLibelle(libelle);
        if (libelle.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        businessUnitRepository.save(b);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(path = "/list", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<BusinessUnit> getAllBusinessUnits() {

        return businessUnitRepository.findAll();
    }

    @RequestMapping(path = "/update/{id}", method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity updateBu(@PathVariable String id,
                                     @RequestParam(required = false) String libelle)
    {
        List<BusinessUnit> businessUnits = businessUnitRepository.findById(Integer.parseInt(id));
        if(businessUnits.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        BusinessUnit inbound = businessUnits.get(0);
        String intitule;
        intitule = inbound.getLibelle();
        if(libelle == null){ inbound.setLibelle(intitule);}
        if (libelle!=null) {
            inbound.setLibelle(libelle);
        }
        businessUnitRepository.save(inbound);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
