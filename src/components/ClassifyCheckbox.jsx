import * as React from "react";

export const classifyCheckbox = (props)=> {
 
    return (
        <div>
            <label>Nyttigt</label>
            <input id="isHealty" type="checkbox" checked={props.isHealty} onChange={props.updateClassification}/>
        </div>
    )
}