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
  tableHeaders : string[] = ["Year of balance" , "Actual/Revised/Estimates", "Category"
  , "Item" , "Amount( S$ million)", "Percent of gdp"];

  tableHeaderR : string[] = ["yearOfBalance", "state", "category", "item", "amount", 
  "percentOfGdp"];
  govBFPs! : GovernmentBFP[]
  page : number
  previousPage : number
  pageSize : number
  totalI: number
  showPagination : boolean = false
  loadedD : boolean = false
  selectedRow : number
  lastSort: number
  decre : boolean

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
    this.decre = false
    this.lastSort = -1
  }


  loadData(){
    this.govBFPService.listGovBFP().subscribe(
      
      govBFPs => {this.govBFPs = govBFPs;
        this.loadedD = true
        if(this.lastSort != -1){
          this.decre = !this.decre
          console.log(this.lastSort)
          this.sortT(this.lastSort);
          console.log(this.govBFPs)
        }
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

  sortT(act : number){
    console.log("Sorting")
    if(act == this.lastSort){
      this.decre = !this.decre
    }
    else{
      this.decre = false;
    }
    if(this.decre == true){
      this.govBFPs.sort((a, b) => (a[this.tableHeaderR[act]] < b[this.tableHeaderR[act]] ? 1 : a[this.tableHeaderR[act]] > b[this.tableHeaderR[act]] ? -1 : 0))
    }
    else{
      this.govBFPs.sort((a, b) => (a[this.tableHeaderR[act]] > b[this.tableHeaderR[act]] ? 1 : a[this.tableHeaderR[act]] < b[this.tableHeaderR[act]] ? -1 : 0))
    }
    this.lastSort = act;
  }
}
