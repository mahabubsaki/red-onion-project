import axios from "axios"
import { useEffect, useState } from "react"

const useFoods = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    if (foods.length > 0) {
        localStorage.setItem('allFoods', JSON.stringify(foods))
    }
    return foods
}
export default useFoods