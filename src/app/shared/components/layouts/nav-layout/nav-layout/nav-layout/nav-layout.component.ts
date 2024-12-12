import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../../header/header.component";
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { LogoBlueComponent } from "../../../../logo-blue/logo-blue.component";

@Component({
  selector: 'app-nav-layout',
  imports: [RouterOutlet, HeaderComponent, LogoBlueComponent],
  templateUrl: './nav-layout.component.html',
  styleUrl: './nav-layout.component.css'
})
export class NavLayoutComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }

}
