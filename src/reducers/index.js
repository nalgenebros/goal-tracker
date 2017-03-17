import { combineReducers } from 'redux';
import TasksReducer from './TasksReducer';
import TaskListReducer from './TaskListReducer';

export default combineReducers({
    tasksForm: TasksReducer,
    tasks: TaskListReducer
});
