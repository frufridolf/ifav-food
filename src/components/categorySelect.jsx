import * as React from "react";

export const categorySelect = ({updateCategory,chosenCategory})=> {
    const handleChange =(event) => {
       updateCategory(event.currentTarget.value);

    }
    let selectedCategory = chosenCategory || "";
    return (
        <div>
            <label>Välj kategori</label>
            <select value={selectedCategory} onChange={(event) => handleChange(event)}>
            <option value="">Välj</option>
                <option value="Frukost">Frukost</option>
                <option value="Lunch">Lunch</option>
                <option value="Mellanmål">Mellanmål</option>
                <option value="Middag">Middag</option>
            </select>
        </div>
    )
}

