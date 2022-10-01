import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//servicios
import{ CargarScriptService } from "./cargar-script.service";

//fin servicios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { EduExpComponent } from './component/edu-exp/edu-exp.component';
import { HardComponent } from './component/hard/hard.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    EduExpComponent,
    HardComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
CargarScriptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
