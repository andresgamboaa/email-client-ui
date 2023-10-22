import { createReducer, on } from "@ngrx/store"
import { toggleSelection, toggleSelectionAll } from "./selected.actions"

interface State {
    selected: Set<string>
}
var set = new Set<string>()
export const initialState: State = {
    selected: set 
}

export const selectedReducer = createReducer(
    initialState,

    on(toggleSelection, ({selected}, {id}) => {
        const newState = new Set(selected);
        if (selected.has(id)) {
            newState.delete(id)
        }
        else {
            newState.add(id)
        }

        return {selected:newState}
    }),

    on(toggleSelectionAll, ({selected}, {ids}) => {
        const newState = new Set(selected);

        var check = selected.size < ids.length;
        for (let id of ids) {
            if (check) {
                newState.add(id);
            }
            else {
                newState.delete(id);
            }
        }

        return {selected:newState}
    })
)