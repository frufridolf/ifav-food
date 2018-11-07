import * as React from "react";
import {categorySelect} from "./categorySelect";
import {classifyCheckbox} from "./classifyCheckbox";
//extends React.PureComponent istället? ?
export class FoodTypeContainer extends React.PureComponent{
    // const updateCategory= (value) => {
    //     props.updateCategory;
    // }
    // const updateClassification = (value) => {
    //     props.updateClassification;
    // }
    render() {
    return (
        <div>
            <div>
                {categorySelect(this.props)}    
            </div>
            <div>
               
                {classifyCheckbox(this.props.updateClassification, this.props.isHealty)}
            </div>
        </div>
        
    )
}}
