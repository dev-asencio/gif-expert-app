import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGgrid } from "./components/GifGrid";

export const GifExpertApp=()=>{

    const [categories, setCategories] = useState(['One Puch']);
    
    const onAddCategory = (NewCategory )=> {
        if(categories.includes(NewCategory)) return;
        setCategories([NewCategory,...categories]);
    }

    return(
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
        onNewCategory = {(value)=>onAddCategory(value) }   
        />
   
   
        {
            categories.map( (category) =>(
           <GifGgrid
                key={category}
                category={category}/>
            ))
        }
    
    </>
    
    )
}