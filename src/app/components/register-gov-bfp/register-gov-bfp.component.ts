import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ModalDismissReasons, NgbModal, NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap'; 
import { GovernmentBFPService } from 'src/app/services/government-bfp.service';
import { GovernmentBFP } from 'src/app/model/government-bfp';


@Component({
  selector: 'app-register-gov-bfp',
  templateUrl: './register-gov-bfp.component.html',
  styleUrls: ['./register-gov-bfp.component.css']
})
export class RegisterGovBfpComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  
}
