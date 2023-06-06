import {createAction} from "@ngrx/store";

export const prefixDashboard = '[Dashboard Component]'

export const init = createAction(prefixDashboard + 'init');
export const loadCount = createAction(prefixDashboard + 'load count success');
export const loadCountFailure = createAction(prefixDashboard + 'load count failure');