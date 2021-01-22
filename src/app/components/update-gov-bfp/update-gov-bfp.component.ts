import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GovernmentBFP } from 'src/app/model/government-bfp';
import { CommunicationService } from 'src/app/services/communication.service';
import { GovernmentBFPService } from 'src/app/services/government-bfp.service';

@Component({
  selector: 'app-update-gov-bfp',
  templateUrl: './update-gov-bfp.component.html',
  styleUrls: ['./update-gov-bfp.component.css']
})
export class UpdateGovBfpComponent implements OnInit {

  constructor(private govBFPService : GovernmentBFPService, private modalService: NgbModal, private communicationService : CommunicationService) { }
  selectedGovBFP : GovernmentBFP
  ngOnInit(): void {
    this.selectedGovBFP = null
    this.communicationService.sendMessageObservable.subscribe(response =>{
      if(response != null){
        this.selectedGovBFP = Object.assign({}, response);
      }
      else{
        this.selectedGovBFP = null
      }
      this.active();
    }
    )  
  }
  active(){
    if(this.selectedGovBFP != null) {
      return true
    }
    return false
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'New'});
  }

  update(){
    this.govBFPService.updateGovBFP(this.selectedGovBFP).subscribe(
      data=>{
        console.log("updating")
        this.communicationService.reload(true);
      }

    );
  }

}
