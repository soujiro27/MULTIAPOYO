import { combineReducers} from "redux";
import { Login } from "./loginReducer";
import { Users } from "./usersReducer";
import { Posts } from "./postsReducer";

export default combineReducers({
    Login,
    Users,
    Posts
});