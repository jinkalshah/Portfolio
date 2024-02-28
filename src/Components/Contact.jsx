import React from 'react'
import './Components.css'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';

const Contact = () => {
  return (
    <div className='container-1'>
      <div className="form-container" style={{display:'flex',justifyContent:"center",paddingTop:"80px"}}>
      <form style={{border:"1px solid #000",padding:"30px",boxShadow:"3px 3px #36454F"}}>
        <h5>Contact Me</h5>
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Name"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="email"
          label="Email"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="number"
          label="Number"
          variant="outlined"
        />
        <br />
        <Button style={{margin:"10px", marginLeft:"10px"}} variant="contained" color="primary" size='medium'>
          Submit
        </Button>
      </form>
      </div>
    </div>
  )
}

export default Contact