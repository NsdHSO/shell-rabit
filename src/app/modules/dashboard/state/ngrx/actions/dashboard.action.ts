import {createAction} from "@ngrx/store";

export const prefixDashboard = '[DASHBOARD COMPONENT]'

export const initDashboard = createAction(prefixDashboard+' Init Data')
export const successLoadDashboard = createAction(prefixDashboard+' Success Data', (state) => state)
export const failedLoadDashboard = createAction(prefixDashboard+' Failed Data', (state) => ({...state, failed : true}))