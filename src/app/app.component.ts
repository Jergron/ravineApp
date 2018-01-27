import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  billowClouds = [{ class: 'cloud1', path: '../assets/BGCloud1.png', speed: 'x1' },
    { class: 'cloud2', path: '../assets/BGCloud2.png', speed: 'x2'},
    { class: 'cloud3', path: '../assets/BGCloud3.png', speed: 'x3'}];

  darkClouds = [{ class: 'cloud1', path: '../assets/MGCloud1.png', speed: 'x4' },
  { class: 'cloud2', path: '../assets/MGCloud2.png', speed: 'x5' },
  { class: 'cloud3', path: '../assets/MGCloud3.png', speed: 'x6' }];
}
