export const DataTypes = {
    PRODUCTS: "products",
    CATEGORIES: "categories",
    ORDERS: "orders"
}
export const ActionTypes = {
    DATA_LOAD: "data_load",
    DATA_STORE: "data_store",
    //navigate to different pages and change the page size
    DATA_SET_SORT_PROPERTY: "data_set_sort",
    DATA_SET_PAGESIZE: "data_set_pagesize",
    //add support for tracking the user’s product selections
    CART_ADD: "cart_add",
    CART_UPDATE: "cart_update",
    CART_REMOVE: "cart_delete",
    CART_CLEAR: "cart_clear"
}