import React,{useState} from "react";
import "./Components.css"

const BmiCalculator = () => {

    const [age,setAge] =useState()
    const [height,setHeight] = useState()
    const [weight,setWeight] =useState()
    const [gender,setGender] = useState("")
    const [result,setResult]= useState()

    const handleClick=(e)=>{
        e.preventDefault()
        const heightInMeters= height/100;
        const bmi= (weight/(heightInMeters*heightInMeters)).toFixed(2);
        setResult(bmi);
    }

  return (
    <>
        {result && <div className="alert alert-success" style={{textAlign:"center",fontWeight:"500",fontSize:"20px"}} role="alert">Your BMI is {result}</div>}
    <div className="container" style={{marginTop: "90px", marginLeft:"40%"}}>
      <div className="row">
        
        <h1>BMI Calculator</h1>
        <form>
          <div className="form-group row">
            <label for="inputAge" className="col-sm-1 col-form-label">
              Age
            </label>
            <div className="col-sm-2">
              <input
                type="number"
                className="form-control"
                id="inputAge"
                placeholder="Age"
                onChange={(e)=> setAge(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputHeight" className="col-sm-1 col-form-label">
              Height
            </label>
            <div className="col-sm-2">
              <input
                type="number"
                className="form-control"
                id="inputHeight"
                placeholder="height"
                onChange={(e)=> setHeight(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputWeight" className="col-sm-1 col-form-label">
              Weight
            </label>
            <div className="col-sm-2">
              <input
                type="number"
                className="form-control"
                id="inputWeight"
                placeholder="weight"
                onChange={(e)=> setWeight(e.target.value)}
              />
            </div>
          </div>
          <fieldset className="form-group" onChange={(e)=> setGender(e.target.value)}>
            <div className="row">
              <legend className="col-form-label col-sm-1 pt-0">Gender</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                    
                  />
                  <label className="form-check-label" for="gridRadios1">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" for="gridRadios2">
                    Female
                  </label>
                </div>
                <div className="form-check disabled">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios3"
                    value="option3"
                  />
                  <label className="form-check-label" for="gridRadios3">
                    Other
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" style={{margin:"10px 50px"}}  class="btn btn-primary" onClick={handleClick} disabled={!age || !weight || !height ||!gender}>
                Submit
              </button>
            </div>
          </div>
        </form>
        
      </div>
    </div>
    </>
  );
};

export default BmiCalculator;
