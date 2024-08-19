import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderComponent } from "./header/header.component";
import { TrafficLightComponent } from './traffic-light/traffic-light.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent, HeaderComponent, TrafficLightComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit {
  trafficLightValue: string = '';

  ngOnInit(): void {
    this.fetchTrafficLightValue();
  }

  fetchTrafficLightValue(): void {
    // Simula la obtención del valor desde la base de datos
    this.trafficLightValue = '3'; // Este valor se obtendría de la base de datos
  }
}

