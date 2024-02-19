import { Action, handleActions } from 'redux-actions';
import {
    setActiveLayoutAction,
} from './actions';
// import { showPopupAction } from '../dashboard';


const initialState: State.Layouts = {
    activeLayout: 'address',
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS: any = {
    [setActiveLayoutAction]: {
        next: (state: State.Layouts, action: Action<string>): State.Layouts => ({
            ...state,
            activeLayout: action.payload
        })
    },
};

export {
    setActiveLayoutAction,
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions(ACTION_HANDLERS, initialState as any);
