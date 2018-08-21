package hr.tvz.hrapp.web.rest;

import org.springframework.boot.actuate.audit.AuditEvent;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author vedrana.soljic
 */
@RestController
@RequestMapping("/api")
public class EstimationController {

    @GetMapping("/estimation")
    public ResponseEntity<List<AuditEvent>> openEstimations() {
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
