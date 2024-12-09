import React from 'react'
import Nav from 'react-bootstrap/Nav'


const Sidebar = () => {
  return (
    <div className='sidebar'>
       <Nav defaultActiveKey="/home" className="flex-column">
<Nav.Link id='sidebar_head'>Settings</Nav.Link>
<hr className='line'></hr>
       <Nav.Link href="/home" id='ative'>Organization</Nav.Link>
<Nav.Link eventKey="disabled" disabled> Certificates</Nav.Link>
<Nav.Link eventKey="disabled" disabled> Badges</Nav.Link>
<Nav.Link eventKey="disabled" disabled> Permission Access</Nav.Link>
<Nav.Link eventKey="disabled" disabled> Integration</Nav.Link>
</Nav>
    </div>
  )
}

export default Sidebar