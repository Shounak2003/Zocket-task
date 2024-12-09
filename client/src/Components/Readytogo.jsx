import React from 'react'
import Leftnavbar from './Leftnavbar'
import Table from 'react-bootstrap/Table';
import Top from './Top'
import frame from '../images/Frame.png'
import p1 from "../images/p1.png"
import p2 from "../images/p2.png"
import p3 from "../images/p3.png"
import p4 from "../images/p4.png"
import p5 from "../images/p5.png"
import p6 from "../images/p6.png"
import {Link} from 'react-router-dom'
import { MDBSwitch,MDBCheckbox,MDBBtn  } from 'mdb-react-ui-kit';
function Readytogo() {
  return (
    <div style={{width:"100%"}} className='d-flex flex-row '>
    <div className='d-flex flex-column'>
    <div style={{backgroundColor:"#001738", display:"inline",width: "64px" ,paddingBottom:"35px",paddingTop:"20px"}}>
            <img src={frame}></img>
          </div>
          <Leftnavbar/>
          </div>
    
          <div className='d-flex flex-column flex-grow-1'>
          <Top/>
          <div className='progressbar'>
    <div className='d-flex flex-column'>
        <div><h3 style={{marginTop:"50px",marginLeft:"15px"}}>Your Ad campaign</h3></div>
        <div style={{fontSize:"12px",color:"rgba(0, 0, 0, 0.5)" ,marginLeft:"20px",marginBottom:"30px"}}>Launch your app in just 4 easy Steps</div>
    </div>
    
    
    
    <div className='d-flex coloumn' >
    
         <div className="md-stepper-horizontal orange">
        <div className="md-step active done">
          <div className="md-step-circle"><span>1</span></div>
          <div className="md-step-title">What do you want to do</div>
          <div className="md-step-bar-left"></div>
          <div className="md-step-bar-right"></div>
        </div>
        <div className="md-step active editable">
          <div className="md-step-circle"><span></span></div>
          <div className="md-step-title">Choose product</div>
          <div className="md-step-optional"></div>
          <div className="md-step-bar-left"></div>
          <div className="md-step-bar-right"></div>
        </div>
        <div className="md-step active ">
          <div className="md-step-circle"><span></span></div>
          <div className="md-step-title">Campaign settings</div>
          <div className="md-step-bar-left"></div>
          <div className="md-step-bar-right"></div>
        </div>
        <div className="md-step last active">
          <div className="md-step-circle last"><span> </span></div>
          <div className="md-step-title">Ready to go</div>
          <div className="md-step-bar-left"></div>
          <div className="md-step-bar-right"></div>
        </div>
      </div>
    
    
    
      </div>
    
    {/*  content selection   ------------------------------- */}
    
    
      <div style={{background:"white", marginLeft:"40px",marginRight:"40px"}}>
     
       <Table style={{borderCollapse: 'separate',borderSpacing: '30px 24px'}}hover>
          <thead>
            <tr>
              
              <th colSpan={3}>Ready to go <span style={{fontSize:"12px", color:"grey"}}>step(4 of 4)</span></th>
             
            </tr>
          </thead>
          <tbody>
            <tr style={{padding:"25px",borderRadius:"14px"}}>
            <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>
              <div class="d-flex flex-column bd-highlight mb-3">
              <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight" ><img style={{height:"50px",width:"50px",borderRadius:"50px"}} src={p6}/></div>
  {/* <div class="d-flex flex-column bd-highlight "> */}
  <div class="p-2 bd-highlight">Mukund cake shop</div>
{/* </div> */}
</div>
<div>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos sequi, enim nostrum reiciendis, quo aperiam nihil, dolorum voluptatum voluptas omnis.
</div>
<div>
    <img style={{height:"100",width:"100"}}src={p5}></img>
</div>
</div>
              </td>
              <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>
              <div class="d-flex flex-column bd-highlight mb-3">
              <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight" ><img style={{height:"50px",width:"50px",borderRadius:"50px"}} src={p6}/></div>
  {/* <div class="d-flex flex-column bd-highlight "> */}
  <div class="p-2 bd-highlight">Mukund cake shop</div>
{/* </div> */}
</div>
<div>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos sequi, enim nostrum reiciendis, quo aperiam nihil, dolorum voluptatum voluptas omnis.
</div>
<div>
    <img style={{height:"100",width:"100"}}src={p5}></img>
</div>
</div>
              </td>
              <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>
              <div class="d-flex flex-column bd-highlight mb-3">
              <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight" ><img style={{height:"50px",width:"50px",borderRadius:"50px"}} src={p6}/></div>
  {/* <div class="d-flex flex-column bd-highlight "> */}
  <div class="p-2 bd-highlight">Mukund cake shop</div>
{/* </div> */}
</div>
<div>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos sequi, enim nostrum reiciendis, quo aperiam nihil, dolorum voluptatum voluptas omnis.
</div>
<div>
    <img style={{height:"100",width:"100"}}src={p5}></img>
</div>
<div>
<MDBBtn rounded  style={{width:"90px",height:"30px",backgroundColor:"#E1FFE0",borderColor:"#E1FFE0",fontSize:"12px"}}><span style={{color:"#317C2E"}}>Change Image</span></MDBBtn>
</div>
</div>
              </td>
            </tr>
            <tr>
             
            <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>
              <div class="d-flex flex-column bd-highlight mb-3">
              <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight" ><img style={{height:"50px",width:"50px",borderRadius:"50px"}} src={p6}/></div>
  <div class="p-2 bd-highlight">Mukund cake shop</div>

</div>
<div>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos sequi, enim nostrum reiciendis, quo aperiam nihil, dolorum voluptatum voluptas omnis.
</div>
<div>
    <img style={{height:"100",width:"100"}}src={p5}></img>
</div>
</div>
              </td>


              <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>
              <div class="d-flex flex-column bd-highlight mb-3">
              <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight" ><img style={{height:"50px",width:"50px",borderRadius:"50px"}} src={p6}/></div>
  <div class="p-2 bd-highlight">Mukund cake shop</div>

</div>
<div>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos sequi, enim nostrum reiciendis, quo aperiam nihil, dolorum voluptatum voluptas omnis.
</div>
<div>
    <img style={{height:"100",width:"100"}}src={p5}></img>
</div>
</div>
              </td>

              <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>
              <div class="d-flex flex-column bd-highlight mb-3">
              <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight" ><img style={{height:"50px",width:"50px",borderRadius:"50px"}} src={p6}/></div>
  <div class="p-2 bd-highlight">Mukund cake shop</div>

</div>
<div>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos sequi, enim nostrum reiciendis, quo aperiam nihil, dolorum voluptatum voluptas omnis.
</div>
<div>
    <img style={{height:"100",width:"100"}}src={p5}></img>
</div>
</div>
              </td>

    
            </tr>
        
             <tr>
              <td colSpan={3}>
                <Link to='/'>
                <button style={{float:"right"}}type="button" class="btn btn-primary">Continue</button>

                </Link>
                
                 </td>
            </tr>
          </tbody>
        </Table>
    </div>
    
    {/* content selction ends --------------------------------- */}
    </div>
    </div>
    
    
        </div>
  )
}

export default Readytogo