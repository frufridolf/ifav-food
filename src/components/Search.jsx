import * as React from "react";
import {apiService} from "../services/apiService";
//extends React.PureComponent istället? ?
export class Search extends React.PureComponent{
  
    
    searchRecipe(){
        alert("Im an alert");
        let service = new apiService();
        let result = service.search("Hallon");
        // let result = [
        //     "http://xn--ssongsmat-v2a.nu/ssm/Hallon",
        //     "http://xn--ssongsmat-v2a.nu/ssm/Hallon,_bj%C3%B6rnb%C3%A4r_och_bl%C3%A5b%C3%A4r",
        //     "http://xn--ssongsmat-v2a.nu/ssm/Hallonblad"
        // ];
        this.props.updateSearchResult(result);
    };

   
    render() {
        let chosenCat = this.props.category;
        let chosenClass = this.props.healty;
        let funk = this.props.updateSearchResult;

    return (
        <div>
            <div>
              <button type="button" onClick={()=>{this.searchRecipe()}}>Sök</button> 
            </div>
            <div>
            </div>
        </div>
        
    )
}}
