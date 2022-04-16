import { useEffect, useState } from "react"

const useCart = (foods) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = []
        const localStorageObject = JSON.parse(localStorage.getItem('cart'))
        for (const id in localStorageObject) {
            const findById = foods.find(food => food.id === id)
            if (findById) {
                findById.quantity = localStorageObject[id]
                storedCart.push(findById)
            }
        }
        setCart(storedCart)
    }, [foods])
    return [cart, setCart]
}
export default useCart