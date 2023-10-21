import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
})

export class ExpansionComponent {
  @Input() name!: string;
  isToggled: boolean = false;

  toggleState() {
    this.isToggled = !this.isToggled;
  }
}
