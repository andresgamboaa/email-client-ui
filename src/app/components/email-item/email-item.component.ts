import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Email } from '../../email.model';

const colors = [
  '#A2C97D',
  '#D6BA73',
  '#8BBF9F',
  '#9D638D',
  '#7DC9C6',
  '#C97D80'
]

@Component({
  selector: 'app-email-item',
  templateUrl: './email-item.component.html',
})
export class EmailItemComponent {
  @Input() email!: Email;
  @Input() isSelected = false;
  @Input() showSelectButton = false;
  @Output() selected = new EventEmitter<string>();
  color = colors[Math.floor(Math.random()*colors.length)];

  toggleSelection() {
    this.selected.emit(this.email.Id);
  }
}