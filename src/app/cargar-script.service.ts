import { Injectable } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptService {

  constructor() { }

  carga( archivos:string [] )
  {
    for ( let archivo of archivos )
    {
      let script = document.createElement("script");
      script.src = "./assets/menuresponsive/" + archivo + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild( script );
    }

  }

  
}
