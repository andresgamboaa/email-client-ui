import { Component } from '@angular/core';
import { Store, createSelector, select } from '@ngrx/store';
import { Observable } from 'rxjs';

export const selectFeature = (state: any) => state.selected;
export const countSelector = createSelector(selectFeature, state => state.selected);


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  selected$: Observable<Set<string>>;

  constructor(private store: Store) {
    this.selected$ = this.store.pipe(select(countSelector));
  }
}
