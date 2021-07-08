package com.financeactive.pops.Controllers;

import com.financeactive.pops.Entities.JobTitle;
import com.financeactive.pops.Repositories.JobTitleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path = "/jobtitles/")
public class JobTitleController {

    @Autowired
    private JobTitleRepository jobTitleRepository;

    @RequestMapping(path = "/add", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity addService(@RequestParam String libelle) {

        JobTitle j = new JobTitle();
        j.setLibelle(libelle);
        if(libelle.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        jobTitleRepository.save(j);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(path = "/list", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<JobTitle> getAllServices() {

        return jobTitleRepository.findAll();

    }

    @RequestMapping(path = "/update/{id}", method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity updateJobTitle(@PathVariable String id,
                                           @RequestParam(required = false) String libelle)
    {
        List<JobTitle> jobTitles = jobTitleRepository.findById(Integer.parseInt(id));
        if(jobTitles.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        JobTitle inbound = jobTitles.get(0);
        String intitule;
        intitule = inbound.getLibelle();
        if(libelle == null){ inbound.setLibelle(intitule);}
        if (libelle!=null) {
            inbound.setLibelle(libelle);
        }
        jobTitleRepository.save(inbound);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
