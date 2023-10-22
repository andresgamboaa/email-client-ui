import { Component, Input, OnInit } from '@angular/core';
import { Store, createSelector, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Email } from 'src/app/email.model';
import { toggleSelection, toggleSelectionAll } from 'src/app/state/selected/selected.actions';

export const selectFeature = (state: any) => state.selected;

export const countSelector = createSelector(selectFeature, state => state.selected);


@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
})
export class EmailListComponent {
  @Input() emails!: Email[];
  selected$: Observable<Set<string>>;

  constructor(private store: Store) {
    this.selected$ = this.store.pipe(select(countSelector));
  }

  toggleSelection(emailId: string) {
    this.store.dispatch(toggleSelection({id: emailId}));
  }

  toggleSelectionAll() {
    this.store.dispatch(toggleSelectionAll( {
      ids: this.emails.map((e) => e.Id)
    }))
  }
}