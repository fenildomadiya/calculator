import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BackspaceIcon from '@mui/icons-material/Backspace';
import PercentIcon from '@mui/icons-material/Percent';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DragHandleIcon from '@mui/icons-material/DragHandle';

import Button from '@mui/material/Button';

function Calci()
{

    return(
    
         <>
         <div className="container">
            <div className="center d-flex  bg-black align-items-center">
           <div className="calci bg-light shadow  p-5 text-center mx-auto">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <input type="text" name="" placeholder="0" className="text-end pe-2 p-2 placeholder-wave bg-light"/>
                </div>
                
                {/* ========= FIRST ROW ========= */}


                <div className="row pt-5 gap-4 justify-content-start">
                    <div className="col-md-2">
                      <Button className=" button" variant="contained"><PercentIcon/></Button>
                    </div>
                    <div className="col-md-2">
                      <Button className=" button" variant="contained" color="success">CE</Button>
                     </div>

                     <div className="col-md-2">
                      <Button className=" button" variant="contained" color="success">
                        <img src="divide.png" alt="" className="division"/>
                      </Button>
                     </div>
                     <div className="col-md-2">
                      <Button className=" button" variant="contained" color="success"><BackspaceIcon/></Button>
                     </div>
                    
                </div>


                {/* ========= SECOND ROW ========= */}

                
                <div className="row pt-3 gap-4 justify-content-start">
                    <div className="col-md-2">
                      <Button className=" button" variant="contained" value="7">7</Button>
                    </div>
                    <div className="col-md-2">
                      <Button className=" button" variant="contained">8</Button>
                     </div>

                     <div className="col-md-2">
                      <Button className=" button" variant="contained">9</Button>
                     </div>
                     <div className="col-md-2">
                      <Button className=" button" variant="contained" ><ClearIcon/></Button>
                     </div>
                    
                </div>

                 {/* ========= Third ROW ========= */}

                
                 <div className="row pt-3 gap-4 justify-content-start">
                    <div className="col-md-2">
                      <Button className=" button" variant="contained" value="7">4</Button>
                    </div>
                    <div className="col-md-2">
                      <Button className=" button" variant="contained">5</Button>
                     </div>

                     <div className="col-md-2">
                      <Button className=" button" variant="contained">6</Button>
                     </div>
                     <div className="col-md-2">
                      <Button className=" button" variant="contained" ><RemoveIcon/></Button>
                     </div>
                    
                </div>


               
               {/* ========= Forth ROW ========= */}

                
               <div className="row pt-3 gap-4 justify-content-start">
                    <div className="col-md-2">
                      <Button className=" button" variant="contained" value="7">1</Button>
                    </div>
                    <div className="col-md-2">
                      <Button className=" button" variant="contained">2</Button>
                     </div>

                     <div className="col-md-2">
                      <Button className=" button" variant="contained">3</Button>
                     </div>
                     <div className="col-md-2">
                      <Button className=" button" variant="contained" ><AddIcon/></Button>
                     </div>
                    
                </div>


                 {/* ========= Fifth ROW ========= */}

                
               <div className="row pt-3 gap-4 justify-content-start">
                    <div className="col-md-2">
                      <Button className=" button" variant="contained" value="7">00</Button>
                    </div>
                    <div className="col-md-2">
                      <Button className=" button" variant="contained">0</Button>
                     </div>

                     <div className="col-md-2">
                      <Button className=" button" variant="contained">.</Button>
                     </div>
                     <div className="col-md-2">
                      <Button className=" button" variant="contained" color="success"><DragHandleIcon/></Button>
                     </div>
                    
                </div>



            </div>
           </div>
         </div>
         </div>
         </>

    );
}

export default Calci;




{/* <Button color="secondary">Secondary</Button>
<Button variant="contained" color="success">
  Success
</Button> */}