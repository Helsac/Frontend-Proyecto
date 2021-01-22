import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap'; 
import { GovernmentBFPService } from 'src/app/services/government-bfp.service';
import { GovernmentBFP } from 'src/app/model/government-bfp';
import { CommunicationService } from 'src/app/services/communication.service';




@Component({
  selector: 'app-list-gov-bfp',
  templateUrl: './list-gov-bfp.component.html',
  styleUrls: ['./list-gov-bfp.component.css']
})
export class ListGovBFPComponent implements OnInit {

  constructor(private govBFPService : GovernmentBFPService, private communicationService : CommunicationService) { }

  govBFPs! : GovernmentBFP[]
  page : number
  previousPage : number
  pageSize : number
  totalI: number
  showPagination : boolean = false
  loadedD : boolean = false
  selectedRow : number
  ngOnInit(): void {
    this.loadData()
    this.communicationService.reloadObservable.subscribe(response =>{
      this.loadData();
      console.log("Actualizando");
      this.setClickedRow(-1);
    });

    this.page = 1
    this.previousPage = 1
    this.showPagination = true
    this.pageSize = 15
    this.selectedRow = -1
  }


  loadData(){
    this.govBFPService.listGovBFP().subscribe(
      
      govBFPs => {this.govBFPs = govBFPs;
        console.log(this.govBFPs)
        console.log(this.loadedD)
        this.loadedD = true
      }
 
    );
  }

  setClickedRow(idx : number){
    if(this.selectedRow == idx){
      this.selectedRow = -1
      this.communicationService.sendMessage(null)
    }
    else{
      this.selectedRow = idx
      this.communicationService.sendMessage(this.govBFPs[idx + this.pageSize*(this.page-1)])
    }
  }

  formatNumber(num : number){
    return Intl.NumberFormat('en-us', {minimumFractionDigits: 2}).format(num)

  }
}
