import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap'; 
import { GovernmentBFPService } from 'src/app/services/government-bfp.service';
import { GovernmentBFP } from 'src/app/model/government-bfp';




@Component({
  selector: 'app-list-gov-bfp',
  templateUrl: './list-gov-bfp.component.html',
  styleUrls: ['./list-gov-bfp.component.css']
})
export class ListGovBFPComponent implements OnInit {

  constructor(private govBFPService : GovernmentBFPService) { }

  govBFPs! : GovernmentBFP[]
  page : number
  previousPage : number
  pageSize : number
  totalI: number
  showPagination : boolean = false
  loadedD : boolean = false
  ngOnInit(): void {
    this.loadData()
    this.page = 1
    this.previousPage = 1
    this.showPagination = true
    this.pageSize = 5
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
}
