import { useEffect, useState } from "react"

const useFoods = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://quiet-tor-13369.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return [foods, setFoods]
}
export default useFoods