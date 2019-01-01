import { MaterialModule } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ModelProfileComponent } from './model-profile/model-profile.component';
import { ModelAdminComponent } from './model-admin/model-admin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VideoComponent } from './video/video.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModelProfileComponent,
    ModelAdminComponent,
    UserProfileComponent,
    VideoComponent,
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
