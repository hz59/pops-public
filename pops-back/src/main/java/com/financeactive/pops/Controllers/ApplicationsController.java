package com.financeactive.pops.Controllers;


import com.financeactive.pops.Entities.App;
import com.financeactive.pops.Repositories.ApplicationsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin(origins = "http://localhost:8080",maxAge = 3600)
@Controller
@RequestMapping(path = "/apps")
public class ApplicationsController {
    @Autowired
    private ApplicationsRepository applicationsRepository;

    @RequestMapping(path = "/list", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<App> getAllApplications() {

        return applicationsRepository.findAll();
    }


}
