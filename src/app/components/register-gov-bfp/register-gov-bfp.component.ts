import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ModalDismissReasons, NgbModal, NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap'; 
import { GovernmentBFPService } from 'src/app/services/government-bfp.service';
import { GovernmentBFP } from 'src/app/model/government-bfp';
import { CommunicationService } from 'src/app/services/communication.service';


@Component({
  selector: 'app-register-gov-bfp',
  templateUrl: './register-gov-bfp.component.html',
  styleUrls: ['./register-gov-bfp.component.css']
})
export class RegisterGovBfpComponent implements OnInit {

  govBFP : GovernmentBFP 
  states : String[] = ["Actual", "Revised", "Estimated"]
  constructor(private govBFPService : GovernmentBFPService, private modalService: NgbModal, private communicationService : CommunicationService) { }

  ngOnInit(): void {
    this.govBFP = new GovernmentBFP()
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'New'});
    this.govBFP = new GovernmentBFP()
  }
  save(){
    console.log("GUARDANDO")
    this.govBFPService.registerGovBFP(this.govBFP).subscribe(data => {
      console.log(data);
      this.communicationService.reload(true);
      this.govBFP = new GovernmentBFP();
    });

  }

}
