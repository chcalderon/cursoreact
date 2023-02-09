import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GifExpertApp = () => {
 
    const [categories, setCategories] = useState([ 'One Punch' ]);//, 'Dragon Ball'

    const onAddCategory = ( newCategory) => {
        // const newCategory = ['Pink Floyd',...categories];
        // categories.push(newCategory);
        if (categories.includes(newCategory)) return;
        console.log(newCategory);
        setCategories( [newCategory,...categories] );
    }

    return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory
            onNewCategory={onAddCategory}
         />

        
        { categories.map( (category) => 
            (
                <GiftGrid key={category} category={category}/>
            )
        ) }
        
    </>
  )
}
