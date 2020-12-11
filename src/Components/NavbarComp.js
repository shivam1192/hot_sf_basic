import React, { useState,useCallback } from 'react';
import {Navbar,Nav,Button,Form,FormControl} from 'react-bootstrap';
import {debounce} from "lodash";

const NavbarFun = () =>{

  const [value,setValue] = useState("");
  const [dbValue,savetoDB] = useState("");
  const debounceSave = useCallback(
    debounce((nextValue)=> savetoDB(nextValue),1000),[]
  )
  const handleChange = (event) =>{
    const nextValue = event.target.value;
    setValue(nextValue);
    debounceSave(nextValue);
  }
    return(
        <>
         <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Hot Stackoverflow Questions</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home"></Nav.Link>
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
      <input type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange}/>
     <h5 style={{color:'white'}}> {dbValue}</h5>
  </Navbar>
        </>
    )
}
export default NavbarFun;