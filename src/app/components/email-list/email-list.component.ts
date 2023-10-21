import { Component, Input } from '@angular/core';
import { Email } from 'src/app/email.model';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
})

export class EmailListComponent {
  @Input() emails!: Email[];
  selected = new Set<string>();

  toggleSelection(emailId: string) {
    if (this.selected.has(emailId)) {
      this.selected.delete(emailId);
    } else {
      this.selected.add(emailId);
    }
  }

  toggleSelectionAll() {
    let check = this.selected.size < this.emails.length;

    for (let email of this.emails) {
      if (check) {
        this.selected.add(email.Id)
      }
      else {
        this.selected.delete(email.Id)
      }
    }
  }

}