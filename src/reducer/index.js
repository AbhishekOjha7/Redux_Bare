import { combineReducers } from "redux";
import UserDetailsReducer from "../UserDetails/reducer";
import FormReducer from "../Modules/Form/reducer";
import UsersListReducer from "../Modules/userList/reducer";
const rootReducer = combineReducers({
    // UserDetailsReducer,
    // FormReducer
    UsersListReducer
})

export default rootReducer;