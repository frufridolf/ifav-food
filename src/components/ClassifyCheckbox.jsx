import * as React from "react";

export const classifyCheckbox = ({updateClassification,isHealty})=> {
    const handleChange =(event) => {
        updateClassification(event.currentTarget.checked);
 
     }
    return (
        <div>
            <label>Nyttigt</label>
            <input id="isHealty" type="checkbox" checked={isHealty} onChange={ (event) => handleChange(event)}/>
        </div>
    )
}