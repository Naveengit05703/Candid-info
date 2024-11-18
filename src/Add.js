import React from "react";
import TextField from "@mui/material/TextField";
import { FormControl, FormLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import "./Add.css";

export const Add = () => {
  return (
       <div className="ADD-frame">
      <h5>Additional Certification</h5>
      <div className="Add-text">
        <FormControl>
          <FormLabel className="cont">
            Filter condidates by their are of Certification
          </FormLabel>
        </FormControl>
      </div>
      <div className="Add-input">
        <FormControl>
          <FormLabel className="input-text">Certification details</FormLabel>
          <Autocomplete
            className="All-input"
            disablePortal
            options={[]}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormControl>
      </div>
      
    </div>
   
  );
};
