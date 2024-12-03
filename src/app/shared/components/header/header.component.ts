import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
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
