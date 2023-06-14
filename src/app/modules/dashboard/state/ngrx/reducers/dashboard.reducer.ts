import {
    DashboardCardInterface
} from "../../../utils/dashboard.interface";
import {createReducer, on} from "@ngrx/store";
import {
    failedLoadDashboard, initDashboard, successLoadDashboard
} from "../actions/dashboard.action";
import {
    rotateCarouselLeft, rotateCarouselRight
} from "ngx-ds";

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
                entry : payload.cards.map((value: any) => ({
                    name : value.category_name,
                    ranting : value.avg_ranting,
                    icon : value.category_icon
                })),
                loading : false,
                failed : false

            }
        })),
    on(failedLoadDashboard,
        (state => {
            state.cards.failed = true;
            return {
                ... state,
            }
        })),

    on(rotateCarouselLeft,
        (args) => {
            const first = args.cards.entry[0];
            const newData = args.cards.entry.slice(1);
            newData.push(first);
            return {
                ... args,
                cards : {entry : [...newData ]} as any,
            };
        }),
    on(rotateCarouselRight,
        (args) => {
            const lastElement = args.cards.entry[args.cards.entry.length - 1];
            const newArray = args.cards.entry.slice(0,
                args.cards.entry.length - 1);
            return {
                ... args,
                cards : {entry : [lastElement, ... newArray]} as any,
            };
        }))