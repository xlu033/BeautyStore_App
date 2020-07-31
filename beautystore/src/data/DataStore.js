import { createStore, applyMiddleware } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";
import { asyncActions } from "./AsyncMiddleware";


export const BeautyStoreDataStore
    = createStore(CommonReducer(ShopReducer, CartReducer), applyMiddleware(asyncActions));

