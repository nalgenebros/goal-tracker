import { TASK_UPDATE, TASK_CREATE, TASKS_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    title: '',
    status: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TASK_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case TASK_CREATE:
            return { INITIAL_STATE };
        case TASKS_FETCH_SUCCESS:
            return { ...state };
        default:
            return state;
    }
};
