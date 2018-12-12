//Reducers are pure functions - the first parameter is the "state" object
//which will need to be the same type of object that eventually gets returned.

//We use reducers because the redeucer is automatically invoked by Redux every time
//an event is dispatched from a connected component.

function productsReducer(products = []) {
    console.log('reducer called')
    return products;
}

export default productsReducer;