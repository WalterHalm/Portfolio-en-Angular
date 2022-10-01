import { Component, OnInit } from '@angular/core';
import{ CargarScriptService } from "./../../cargar-script.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptService) { 
    _CargaScripts.carga(["menu"]);
  }

  ngOnInit(): void {
  }
  
}
