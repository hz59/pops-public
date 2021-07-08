package com.financeactive.pops.Controllers;

import com.financeactive.pops.Entities.Contract;
import com.financeactive.pops.Repositories.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/contracts")
public class ContractController {
    @Autowired
    private ContractRepository contractRepository;

    @RequestMapping(path = "/add", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity addContract(@RequestParam String libelle) {

        Contract c = new Contract();
        c.setLibelle(libelle);
        if (libelle.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        contractRepository.save(c);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(path = "/list", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<Contract> getAllContracts(){
        return contractRepository.findAll();
    }
}
