

import * as React from "react";
import { Checkbox, Grid, Row, Col } from "react-bootstrap";


export class CategorySelect extends React.Component{
    state={
        isHealthy: true,
        optionSelect: ""
    };
    handleChange = (event) => {
        this.setState({isHealthy: !this.state.isHealthy});
        
    };
    selectCategory =(event) => {
        this.setState({optionSelect: event.currentTarget.value})
       
    }
    render() {
        return (
        <div>
            <Grid>
                <Row>
                    <Col md={2}><label>Kategory</label></Col>
                
                    <Col >
                        <label htmlFor={this.id}>Nyttigt?</label>
                        
                        
                    </Col>
                 </Row>
                 <Row>
                    <Col md={2}>
                        <select value={this.state.optionSelect} onChange={event => {this.selectCategory(event)}}>
                        <option value="Middag">Middag</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Mellanmål">Mellanmål</option>
                        <option value="Frukost">Frukost</option>
                        </select>
                    </Col>
                
                    <Col> 
                        <input onChange={this.handleChange} id={this.id} type="checkbox" 
                        checked={this.state.isHealthy} />
                        
                    </Col>
                 </Row>
                 <Row><Col>vald:{this.state.optionSelect} </Col></Row>
                 
                
            </Grid>
            <div>
                
            </div>
            <div>
               
               
            </div>

        </div>
        )
};
}