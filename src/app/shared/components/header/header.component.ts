import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LogoComponent } from "../logo/logo.component";


@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {


  constructor(
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }


  cerrarSesion(){
    this.router.navigateByUrl('/signin');
  }


}
