import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { Router } from '@angular/router';
import { GovernmentBFP } from '../model/government-bfp';
import { map, catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class GovernmentBFPService {
  private urlBase = "http://localhost:8080/govAnual/govBFP";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient,private router: Router) { }

  registerGovBFP(gBFP :GovernmentBFP): Observable<Object> {
    return this.http.post(this.urlBase, gBFP, {headers: this.httpHeaders});
  }

  listGovBFP(): Observable<any> {
    return this.http.get(this.urlBase).pipe(
      map(response => response as GovernmentBFP[])
    )
  }

  updateGovBFP(gBFP :GovernmentBFP): Observable<any> {
    return this.http.put(this.urlBase, gBFP, {headers: this.httpHeaders});
  }
  
  deleteGovBFP(id : number) {
    return this.http.delete(this.urlBase + "/" + id, {headers: this.httpHeaders});
  }


}
