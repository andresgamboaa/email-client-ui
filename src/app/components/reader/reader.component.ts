import { Component, Input } from '@angular/core';
import { Email } from 'src/app/email.model';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent {
  @Input() email!: Email;
}
