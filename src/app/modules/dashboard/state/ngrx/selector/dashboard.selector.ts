import {createSelector} from "@ngrx/store";

export const selectCards = createSelector((state: any) => state['dashboardReducer'],
    (cards) => cards)

