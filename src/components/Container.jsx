import * as React from "react";
import {Grid, Row, Col} from "react-bootstrap";
import logo from '.././images/vaxthuset.jpg';
import { SearchContainer } from "./SearchContainer";

export class Container extends React.Component{
render() 
{
    return( 
      <Grid>
        <Row className="show-grid">
          <Col md={12}>
            <img src={logo} className="App-logo" alt="logo" style={{width:"100%"}} />
          </Col>
        </Row>
        <Row className="show-grid">
        <Col md={2} mdPull={2} />
        <Col md={10}>
          <SearchContainer/> 
        </Col>
        </Row>
      </Grid>
      
    )
    // http://säsongsmat.nu/w/api.php?action=opensearch&format=json&search=Halloweenpump&namespace=550

}
}

export default Container;