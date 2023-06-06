import {createReducer, on} from "@ngrx/store";
import {init, loadCount} from "./dashboard.actions";
import {createEntityAdapter, EntityAdapter} from "@ngrx/entity";

export const initialState = 2;
export const quotesAdapter: EntityAdapter<any> = createEntityAdapter<any>();

export const count = createReducer(
    initialState,
    on(init, (state) => (state)),
    on(loadCount, (state) => state)
)