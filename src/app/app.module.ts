import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule} from 'ng-circle-progress';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExpLaboralComponent } from './components/exp-laboral/exp-laboral.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AcercaDeComponent,
    FooterComponent,
    ContactoComponent,
    ProyectosComponent,
    SkillsComponent,
    EducacionComponent,
    ExpLaboralComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule, 
    NgCircleProgressModule.forRoot({
      outerStrokeColor: "#C090E0",
      innerStrokeColor: "#7F5F94",
      outerStrokeWidth: 6,
      innerStrokeWidth: 2,
      animationDuration: 700,
      showSubtitle: false,
      showImage: true,
      imageHeight: 50,
      imageWidth: 50,
      radius: 50,
      responsive: true
    })    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
