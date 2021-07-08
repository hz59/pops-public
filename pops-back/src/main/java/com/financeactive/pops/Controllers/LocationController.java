package com.financeactive.pops.Controllers;

import com.financeactive.pops.Entities.Location;
import com.financeactive.pops.Repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
    @RequestMapping(path = "/locations")
    public class LocationController {
        @Autowired
        private LocationRepository locationRepository;

        @RequestMapping(path = "/add", method = RequestMethod.POST)
        @ResponseBody
        public ResponseEntity addLocation(@RequestParam String libelle) {

            Location l = new Location();
            l.setLibelle(libelle);
            if (libelle.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            locationRepository.save(l);
            return new ResponseEntity<>(HttpStatus.OK);
        }

        @RequestMapping(path = "/list", method = RequestMethod.GET)
        @ResponseBody
        public Iterable<Location> getAllDepartments() {

            return locationRepository.findAll();
        }

    @RequestMapping(path = "/update/{id}", method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity updateLocation(@PathVariable String id,
                                     @RequestParam(required = false) String libelle)
    {
        List<Location> locations = locationRepository.findById(Integer.parseInt(id));
        if(locations.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Location inbound = locations.get(0);
        String intitule;
        intitule = inbound.getLibelle();
        if(libelle == null){ inbound.setLibelle(intitule);}
        if (libelle!=null) {
            inbound.setLibelle(libelle);
        }
        locationRepository.save(inbound);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    }
