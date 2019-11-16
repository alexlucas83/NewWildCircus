
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
  import './navbar.scss';
  import { Link} from 'react-router-dom';

 
export default class Example extends React.Component {
  constructor(props) {
    super(props);
 
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md" className="navbarCircus">
        {/* <img src="https://www.vendeemusique.fr/wp-content/uploads/2019/03/logo-rvb-cirque-ecran.png" alt="logoScary" height="50"></img> */}
          <NavbarBrand href="/">AlexCircus</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav  navbar>
              <NavItem className="navbarCart">
                <Link to="/pictures" href="">Pictures</Link>
              </NavItem>
              <NavItem className="navbarCart">
                <Link to="/calendar" href="">Date/Reservation</Link>
              </NavItem>
              <NavItem className="navbarCart">
                <Link to="/miseur" href="">My Cart</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}