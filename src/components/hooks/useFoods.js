import { useEffect, useState } from "react"

const useFoods = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return [foods, setFoods]
}
export default useFoods