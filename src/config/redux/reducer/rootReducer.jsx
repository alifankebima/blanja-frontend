import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import productReducer from "./productReducer";
import sellerReducer from "./sellerReducer";

const rootReducer = combineReducers({
    counter : counterReducer,
    product : productReducer,
    seller : sellerReducer,
});

export default rootReducer