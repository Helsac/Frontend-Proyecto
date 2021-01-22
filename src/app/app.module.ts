import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGovBFPComponent } from './components/list-gov-bfp/list-gov-bfp.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterGovBfpComponent } from './components/register-gov-bfp/register-gov-bfp.component';
import { UpdateGovBfpComponent } from './components/update-gov-bfp/update-gov-bfp.component';
import { DeleteGovBfpComponent } from './components/delete-gov-bfp/delete-gov-bfp.component';


@NgModule({
  declarations: [
    AppComponent,
    ListGovBFPComponent,
    RegisterGovBfpComponent,
    UpdateGovBfpComponent,
    DeleteGovBfpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
