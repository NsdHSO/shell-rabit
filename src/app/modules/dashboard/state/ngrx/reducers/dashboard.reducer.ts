import {
    DashboardCardInterface
} from "../../../utils/dashboard.interface";
import {createReducer, on} from "@ngrx/store";
import {
    failedLoadDashboard, initDashboard, successLoadDashboard
} from "../actions/dashboard.action";

export interface DashboardState {
    cards: {
        entry: DashboardCardInterface[],
        failed?: boolean,
        loading: boolean
    }
}

export const initialDashboardState = {
    cards : {
        entry : [],
        failed : false,
        loading : true
    }
}

export const dashboardReducer = createReducer(initialDashboardState,
    on(initDashboard,
        (state) => (state)),
    on(successLoadDashboard,
        (state,
            payload) => ({
            ... state,
            cards : {
                entry : payload.cards,
                loading : false,
                failed: false
            }
        })),
    on(failedLoadDashboard,
        (state => {
            state.cards.failed = true;
            return {
                ... state,
            }
        })))