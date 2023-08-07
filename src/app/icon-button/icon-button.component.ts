import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent {
  public showIcon = false;
  public randomIconClass = '';

  constructor() {}

  onButtonClick() {
    this.showIcon = true;
    this.randomIconClass = this.getRandomIcon();
    setTimeout(() => {
      this.showIcon = false;
    }, 3000);
  }

  private getRandomIcon(): string {
    const icons = [
      'fa-heart',
      'fa-star',
      'fa-bell',
      'fa-envelope',
      'fa-thumbs-up',
    ];
    const randomIndex = Math.floor(Math.random() * icons.length);
    return icons[randomIndex];
  }
}
