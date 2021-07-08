package com.financeactive.pops.Controllers;

import com.financeactive.pops.Entities.Service;
import com.financeactive.pops.Repositories.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path = "/services/")
public class ServicesController {

    @Autowired
    private ServiceRepository serviceRepository;

    @RequestMapping(path = "/add", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity addService(@RequestParam String libelle) {

        Service s = new Service();
        s.setLibelle(libelle);
        if(libelle.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
            serviceRepository.save(s);
            return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(path = "/list", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<Service> getAllServices() {

        return serviceRepository.findAll();

    }

    @RequestMapping(path = "/update/{id}", method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity updateService(@PathVariable String id,
                                     @RequestParam(required = false) String libelle)
    {
        List<Service> services = serviceRepository.findById(Integer.parseInt(id));
        if(services.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Service inbound = services.get(0);
        String intitule;
        intitule = inbound.getLibelle();
        if(libelle == null){ inbound.setLibelle(intitule);}
        if (libelle!=null) {
            inbound.setLibelle(libelle);
        }
        serviceRepository.save(inbound);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
