import React from 'react';
import {Navbar,Nav,Button,Form,FormControl} from 'react-bootstrap';

const NavbarFun = () =>{
    return(
        <>
         <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Hot Stackoverflow Questions</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home"></Nav.Link>
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
    <Form>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form>
  </Navbar>
        </>
    )
}
export default NavbarFun;