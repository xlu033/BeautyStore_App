import { ActionTypes } from "./Types";

//required to create and return new objects
//that incorporate any required changes
export const ShopReducer = (storeData, action) => {
    switch(action.type) {
        case ActionTypes.DATA_LOAD:
            return {
                ...storeData,
                [action.payload.dataType]: action.payload.data
            };
        default:
            return storeData || {};
    }
}