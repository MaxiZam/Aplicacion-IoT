import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [CommonModule],  // Importa CommonModule aquí
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent {
  @Input() colorValue!: string;
  currentColor: string = '';

  ngOnInit(): void {
    this.setCurrentColor();
  }

  setCurrentColor(): void {
    switch(this.colorValue) {
      case '1':
        this.currentColor = 'green';
        break;
      case '2':
        this.currentColor = 'yellow';
        break;
      case '3':
        this.currentColor = 'orange';
        break;
      case '4':
        this.currentColor = 'red';
        break;
      case '5':
        this.currentColor = 'violet';
        break;
      default:
        this.currentColor = '';
    }
  }
}


