// test runs
import { MaterialModule } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ModelProfileComponent } from './model-profile/model-profile.component';
import { ModelAdminComponent } from './model-admin/model-admin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AnalComponent } from './components/anal/anal.component';
import { CouplesComponent } from './components/couples/couples.component';
import { FappingComponent } from './components/fapping/fapping.component';
import { BdsmComponent } from './components/bdsm/bdsm.component';
import { LinerieComponent } from './components/linerie/linerie.component';
import { FetishesComponent } from './components/fetishes/fetishes.component';
import { SoloComponent } from './components/solo/solo.component';
import { ToysComponent } from './components/toys/toys.component';
import { ModelsaFComponent } from './components/modelsa-f/modelsa-f.component';
import { ModelsgLComponent } from './components/modelsg-l/modelsg-l.component';
import { ModelsmRComponent } from './components/modelsm-r/modelsm-r.component';
import { ModelssZComponent } from './components/modelss-z/modelss-z.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ModelProfileComponent,
    ModelAdminComponent,
    UserProfileComponent,
    AnalComponent,
    CouplesComponent,
    FappingComponent,
    BdsmComponent,
    LinerieComponent,
    FetishesComponent,
    SoloComponent,
    ToysComponent,
    ModelsaFComponent,
    ModelsgLComponent,
    ModelsmRComponent,
    ModelssZComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
