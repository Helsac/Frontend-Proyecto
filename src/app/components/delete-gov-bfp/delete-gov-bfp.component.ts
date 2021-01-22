import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GovernmentBFP } from 'src/app/model/government-bfp';
import { CommunicationService } from 'src/app/services/communication.service';
import { GovernmentBFPService } from 'src/app/services/government-bfp.service';

@Component({
  selector: 'app-delete-gov-bfp',
  templateUrl: './delete-gov-bfp.component.html',
  styleUrls: ['./delete-gov-bfp.component.css']
})
export class DeleteGovBfpComponent implements OnInit {

  constructor(private govBFPService : GovernmentBFPService, private modalService: NgbModal, private communicationService : CommunicationService) { }
  selectedGovBFP : GovernmentBFP 
  ngOnInit(): void {
    this.selectedGovBFP = null
    this.communicationService.sendMessageObservable.subscribe(response =>{
      this.selectedGovBFP = response;
      
      console.log(response)
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


  delete(){
    this.govBFPService.deleteGovBFP(this.selectedGovBFP.id).subscribe(
      data=>{
        this.communicationService.reload(true);
      }

    );
  }
}
