import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import axios from "axios";

//import Category from './FoodList';



function CategoryList() {
    const [isLoading, setLoading] = useState(true);  // Флаг готовности результата axios
    const [category, setCategories] = useState();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/cooking_recipe/category/").then((resp) => {
            setCategories(resp.data);
            setLoading(false);
        });
    }, []);

    // Если флаг isLoading = false то выводим "Loading..."
    if (isLoading) {
        return <h1>Загрузка...</h1>;
    }

    // Иначе выводим полученные из axios данные
    return (
        <>
        <h1>Выберите категорию:</h1>
        <div className="button">
            {category.map((name) => (
                <a key={name.id} className="s" href={`/foodlist/${name.id}`}>{name.name}</a>
            ))}
        </div>
        </>
    );
}


export default CategoryList
