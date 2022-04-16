const addToDb = (id, quantity) => {
    let storedCart = {}
    const cart = localStorage.getItem('cart')
    if (cart) {
        storedCart = JSON.parse(cart)
    }
    storedCart[id] = quantity
    localStorage.setItem('cart', JSON.stringify(storedCart))
}
export default addToDb