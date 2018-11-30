import * as React from "react";
import {FoodTypeContainer} from "./FoodTypeContainer";
import {Search} from "./Search";
import {Recipes} from "./Recipes";

export class SearchContainer extends React.Component{
    state ={
        chosenCategory: "Frukost",
        isHealty: true
    }
    updateCategory = (value) =>{
        this.setState({chosenCategory:value});
    }
    updateClassification = (value) => {
        this.setState({isHealty:value});
    }
    updateSearchResult = (results) => {
        //todo
        this.setState({searchResults:results} );
    }
render(){
    
    return (<div>
        <div>
        <p>Sök recept</p>
        <p>är detta nyttigt {this.state.isHealty ? "Ja": "Nej"}</p>
        
            <FoodTypeContainer 
            updateCategory={this.updateCategory}
         updateClassification={this.updateClassification}
         chosenCategory={this.state.chosenCategory} 
         isHealty={this.state.isHealty}/>
         </div>
         <div>
             <Search 
                category={this.state.chosenCategory}
                healty={this.state.isHealty}
                updateSearchResult={this.updateSearchResult}
                />
           
         </div>
         <div>
             <Recipes items={this.state.searchResults}/>
        </div>
    </div>)
}
}