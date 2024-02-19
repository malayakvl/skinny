import { Action, handleActions } from 'redux-actions';
import {
    setActiveLayoutAction,
    setAddressDataAction
} from './actions';
// import { showPopupAction } from '../dashboard';


const initialState: State.Layouts = {
    activeLayout: 'address',
    address: {
        email: '',
        last_name: '',
        post_code: '',
        address: '', city:'',
        country_id: '',
        phone: '',
        state_id: ''
    }
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
    [setAddressDataAction]: {
        next: (state: State.Layouts, action: Action<any>): State.Layouts => ({
            ...state,
            address: action.payload
        })
    },
};

export {
    setActiveLayoutAction,
    setAddressDataAction
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions(ACTION_HANDLERS, initialState as any);
