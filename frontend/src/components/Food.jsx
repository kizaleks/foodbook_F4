import React, {useState, useEffect,} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";


function Food() {

    const foodid = useParams();
    const [isLoading, setLoading] = useState(true);
    const [food, setRecipe] = useState();


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/cooking_recipe/food/?food_id=${foodid.id}`).then(res => {
            setRecipe(res.data);
           setLoading(false);
        });
    }, []);


    if (isLoading) {
        return <h1>Загрузка.. </h1>;
    }
    return (
        <>
            <h1>Категория: {food[0].foodCategory} </h1> 
            <h1>Рецепт: {food[0].title} </h1> 
               
            <div className='food'>
                <img src={food[0].image} crossorigin="anonymous"></img>
                <br></br> 
                <text style={{ whiteSpace: "pre-line" }}>{food[0].text}</text>
            </div>
        </>
    );
};

export default Food;