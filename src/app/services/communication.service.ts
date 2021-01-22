import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GovernmentBFP } from '../model/government-bfp';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  message : GovernmentBFP
  private sendMessageSubject = new Subject<GovernmentBFP>();
  sendMessageObservable = this.sendMessageSubject.asObservable();
  
  reloadB : boolean
  private reloadSubject = new Subject<boolean>();
  reloadObservable = this.reloadSubject.asObservable();
  
  
  constructor() { }

  sendMessage(message: GovernmentBFP){
    this.message = message
    this.sendMessageSubject.next(message)
  }

  reload(message : boolean){
    this.reloadB = message
    this.reloadSubject.next(message)
  }
}
