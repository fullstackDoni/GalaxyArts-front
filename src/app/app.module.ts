import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GalaxyListComponent } from './galaxy-list/galaxy-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { CreateGalaxyComponent } from './galaxy-create/galaxy-create.component';
import { GalaxyDetailComponent } from './galaxy-detail/galaxy-detail.component';
import { GalaxyUpdateComponent } from './galaxy-update/galaxy-update.component';
import { GalaxyDeleteComponent } from './galaxy-delete/galaxy-delete.component'; // Импорт HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GalaxyListComponent,
    CreateGalaxyComponent,
    GalaxyDetailComponent,
    GalaxyUpdateComponent,
    GalaxyDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Добавление HttpClientModule в раздел imports
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

