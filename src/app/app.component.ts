import { Component, OnInit } from '@angular/core';
import { Email } from './email.model';
import { EmailService} from './services/email-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'angular-email';
  emails!: Email[];
  selected?: Email;

  constructor(private emailService: EmailService) {
    this.emails = emailService.getInbox();
  }

  select(id: string) {
    this.selected = this.emails.find(e => e.Id == id);
  }

}
