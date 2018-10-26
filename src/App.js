import React from 'react';
//import logo from './logo.svg';
import logo from './images/vaxthuset.jpg';
import './App.css';
import {Grid, Col, Row} from 'react-bootstrap';
import {SearchRecipe} from './components/SearchRecipe';
import {ClassifyCheckbox} from './components/ClassifyCheckbox';
import {CategorySelect} from './components/categorySelect';

class App extends React.Component {
  state ={
    chosenCategory:"",
    isHealty: true
  };
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
        <Grid>
          <Row>
            <Col xs={12} md={12}>knappar för navigering</Col>
          </Row>
          <Row>
            <Col xs={2} md={4}>
              <Grid>
                <Col xs={12} md={12}>sidomeny  </Col>
              </Grid>  
            </Col>
            <Col xs={10} md={8} >
              <Grid>
                <Row> 
                  <Col xs={2} md={4}>
                    <CategorySelect 
                     />
                  </Col>
                  <Col xs={2} md={8}>{this.state.chosenCategory}</Col>
                 
                </Row>
                <Row>
                  <Col xs={2} md={12}>
                  <SearchRecipe />
                  </Col>
                </Row>
              </Grid>  
            </Col>
          </Row>
        </Grid>
     
   
      

      </div>
      
    );
  }
}

export default App;
