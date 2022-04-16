const deleteItem = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    delete cart[item.id]
    localStorage.setItem('cart', JSON.stringify(cart))
}
export default deleteItem