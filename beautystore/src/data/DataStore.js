import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";

export const BeautyStoreDataStore
    = createStore(CommonReducer(ShopReducer, CartReducer));

