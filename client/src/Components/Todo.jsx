import React from 'react'
import Leftnavbar from './Leftnavbar'
import frame from '../images/Frame.png'
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Top from './Top'
import  frame8 from "../images/Frame8.png"
import  frame7 from "../images/Frame7.png"
import  frame6 from "../images/Frame6.png"
import  frame4 from "../images/Frame4.png"
import  frame3 from "../images/Frame3.png"
import  frame2 from "../images/Frame2.png"
import frame1 from"../images/Frame1.png"
import frame9 from"../images/Frame9.png"
import Chooseproduct from './Chooseproduct'

function Todo() {
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
    <div className="md-step editable">
      <div className="md-step-circle"><span></span></div>
      <div className="md-step-title">Choose product</div>
      <div className="md-step-optional"></div>
      <div className="md-step-bar-left"></div>
      <div className="md-step-bar-right"></div>
    </div>
    <div className="md-step  ">
      <div className="md-step-circle"><span></span></div>
      <div className="md-step-title">Campaign settings</div>
      <div className="md-step-bar-left"></div>
      <div className="md-step-bar-right"></div>
    </div>
    <div className="md-step last">
      <div className="md-step-circle last"><span> </span></div>
      <div className="md-step-title">Ready to go</div>
      <div className="md-step-bar-left"></div>
      <div className="md-step-bar-right"></div>
    </div>
  </div>



  </div>

{/*  content selection   ------------------------------- */}


  <div style={{background:"white", marginLeft:"40px",marginRight:"40px"}}>
 
   <Table style={{borderCollapse: 'separate',borderSpacing: '30px 24px'}}>
      <thead>
        <tr>
          
          <th colSpan={3}>What do you want to do? <span style={{fontSize:"12px", color:"grey"}}>step(1 of 4)</span></th>
         
        </tr>
      </thead>
      <tbody>
      <tr style={{padding:"25px",borderRadius:"14px"}}>
              <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>
              <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight"><img src={frame8}/></div>
  <div class="d-flex flex-column bd-highlight ">
  <div class="p-2 bd-highlight">Get Leads as calls</div>
  <div class="p-2 bd-highlight">Reach broad audience and get leads through calls</div>
</div>
</div>
              </td>
              <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>
              <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight"><img src={frame9}/></div>
  <div class="d-flex flex-column bd-highlight ">
  <div class="p-2 bd-highlight">Get Leads as Facebook messages</div>
  <div class="p-2 bd-highlight">Get more FB messages from leads</div>
</div>
</div>
              </td>
              <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>
              <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight"><img src={frame1}/></div>
  <div class="d-flex flex-column bd-highlight ">
  <div class="p-2 bd-highlight">Increase page followers</div>
  <div class="p-2 bd-highlight">Encourage customers to follow your page</div>
</div>
</div>
              </td>
            </tr>




            <tr style={{padding:"25px",borderRadius:"14px"}}>
              <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>
              <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight"><img src={frame2}/></div>
  <div class="d-flex flex-column bd-highlight ">
  <div class="p-2 bd-highlight">Get customer Leads </div>
  <div class="p-2 bd-highlight">Encourage customers to action</div>
</div>
</div>
              </td>
              <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>
              <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight"><img src={frame4}/></div>
  <div class="d-flex flex-column bd-highlight ">
  <div class="p-2 bd-highlight">Get more youtube views</div>
  <div class="p-2 bd-highlight">Increase organic views by obtaining user attention</div>
</div>
</div>
              </td>
              <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}>
              <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight"><img src={frame6}/></div>
  <div class="d-flex flex-column bd-highlight ">
  <div class="p-2 bd-highlight">Get more website traffic</div>
  <div class="p-2 bd-highlight">Get right people to visit your website</div>
</div>
</div>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <Link to='/Chooseproduct'>
                <button style={{float:"right"}}type="button" class="btn btn-primary">Continue</button> 

                </Link>
                </td>
            </tr>
        {/* <tr>

          <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}} > <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight"> <img src={frame8}></img></div>
  <div class="p-2 bd-highlight"><p>Get leads as calls</p></div>
  
</div></td>
          <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}> <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight"> <img src={frame8}></img></div>
  <div class="p-2 bd-highlight"><p>Get leads as calls</p></div>
  
</div></td>
          <td style={{padding:"25px",border:"1.5px solid #F3F3F3",borderRadius:"10px"}}> <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight"> <img src={frame8}></img></div>
  <div class="p-2 bd-highlight"><p>Get leads as calls</p></div>
  
</div></td>
        </tr> */}
      </tbody>
    </Table>
    
</div>

{/* content selction ends --------------------------------- */}
</div>
</div>
</div>


  )
}

export default Todo