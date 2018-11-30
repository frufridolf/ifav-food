import * as React from "react";
import {categorySelect} from "./categorySelect";
import {classifyCheckbox} from "./classifyCheckbox";
//extends React.PureComponent istället? ?
export class FoodTypeContainer extends React.PureComponent{
    
    render(){
    return (
        <div>
            
                {categorySelect(this.props)}    
                {classifyCheckbox(this.props)}     
           
        </div>
        
    )
}
}
