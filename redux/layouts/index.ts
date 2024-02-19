import { Action, handleActions } from 'redux-actions';
import {
    setActiveLayoutAction,
    setAddressDataAction
} from './actions';


const initialState: State.Layouts = {
    activeLayout: 'address',
    address: {
        email: '',
        last_name: '',
        post_code: '',
        address: '', city:'',
        country: '',
        phone: '',
        state: ''
    },
    payment: {
        zip_code: '',
        card_number: '',
        card_name: '',
        card_exp: '',
        paymentAddress: {
            last_name: '',
            post_code: '',
            address: '',
            city:'',
            country: '',
            phone: '',
            state: ''
        }
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
