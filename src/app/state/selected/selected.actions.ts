import { createAction, props } from '@ngrx/store';

export const toggleSelection = createAction(
    '[Email List] Toggle Selection',
    props<{id: string}>()
)

export const toggleSelectionAll = createAction(
    '[Email List] Toggle Selection All',
    props<{ids: string[]}>()
)