import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from "../logo/logo.component";
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {


  constructor(
    private authService: AuthService,
  ) {

  }

  ngOnInit(): void {
  }


  cerrarSesion(){
    this.authService.logout();
  }


}
