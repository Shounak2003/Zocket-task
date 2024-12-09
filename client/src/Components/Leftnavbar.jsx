import React from 'react'
import Nav from 'react-bootstrap/Nav'
import home from '../images/home.png'
import campaign from '../images/campaign.png'
import product from '../images/product.png'
import customers from '../images/customers.png'
const Leftnavbar = () => {
  return (
    <div className='left'>

<Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link >
    <img src={home}></img>
 </Nav.Link>
  <Nav.Link eventKey="link-1"><img src={customers}/></Nav.Link>
  <Nav.Link eventKey="link-2"> <img src={product}/></Nav.Link>
  <Nav.Link eventKey="disabled" disabled><img src={campaign}/>
  </Nav.Link>
</Nav>

    </div>
  )
}

export default Leftnavbar