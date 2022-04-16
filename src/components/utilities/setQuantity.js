const setQuantity = (id, quantity) => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    cart[id] = quantity
    localStorage.setItem('cart', JSON.stringify(cart))
}
export default setQuantity