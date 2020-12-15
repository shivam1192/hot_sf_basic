import React, { useContext,useState } from 'react';
import { DataContext } from '../Context/DataContext';
import {Navbar,Nav,Button,Form,FormControl} from 'react-bootstrap';

const NavbarFun = () =>{
  const {data,setData,page,setPage,searchData,setSearchdata} = useContext(DataContext)

  const handleChange=(e)=>{
      setSearchdata(e.target.value)
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
      <input type="text" value={searchData} placeholder="Search" className="mr-sm-2" onChange={handleChange}/>
  </Navbar>
        </>
    )
}
export default NavbarFun;