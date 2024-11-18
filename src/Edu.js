import React from "react";
import TextField from "@mui/material/TextField";
import { FormControl, FormLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import "./Edu.css";

export const Edu = () => {
  return (
    <div>
      <div className="edu-frame">
        <h3>
          Candidate <span className="blue-text">Education Details</span>
        </h3>
        <div className="exper-h5">
          <h5>Education</h5>
        </div>
        <div className="content">
        <FormControl>
          <FormLabel className="edu-text">
            Filter condidates by their are of study, specialisation or degree
            from any institution
          </FormLabel>
        </FormControl>
        </div>
        
        <div className="edu-input">
          <FormControl>
            <FormLabel className="min-text">Higest education</FormLabel>
            <Autocomplete
              size="small"
              disablePortal
              options={[]}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormControl>
        </div>
        <div className="edu-input">
          <FormControl>
            <FormLabel className="min-text">Second Higest education </FormLabel>
            <Autocomplete
            size="small"
              disablePortal
              options={[]}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormControl>
        </div>

        <div className="edu-input">
          <FormControl>
            <FormLabel className="min-text">College Name </FormLabel>
            <Autocomplete
            size="small"
              disablePortal
              options={[]}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormControl>
        </div>
        <div className="edu-input">
          <FormControl>
            <FormLabel className="min-text">University Name </FormLabel>
            <Autocomplete
            size="small"
              disablePortal
              options={[]}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormControl>
        </div>
        <div className="edu-input">
          <FormControl>
            <FormLabel className="min-text">Permanent</FormLabel>
            <Autocomplete
            size="small"
              disablePortal
              options={[]}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormControl>
        </div>
        <div className="edu-input">
          <FormControl>
            <FormLabel className="min-text">Years of Completion </FormLabel>
            <Autocomplete
            size="small"
              disablePortal
              options={[]}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormControl>
        </div>        
      </div>
    </div>
  );
};
