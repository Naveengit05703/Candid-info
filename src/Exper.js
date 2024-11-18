import React from "react";
import TextField from "@mui/material/TextField";
import { FormControl, FormLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import { Edu } from "./Edu";
import { Add } from "./Add";
import './Exper.css';

export const Exper = () => {
  return (
    <div className="exper-frame">
      <h3>
        Candidate <span className="blue-text">Experiences</span>
      </h3>
      <div className="exper-h5">
        <h5>Total Experience</h5>
      </div>
      <div className="exper">
        <FormControl>
          <FormLabel className="text">Minimum</FormLabel>
          <TextField size="small" className="exper-big"></TextField>
        </FormControl>
        <FormControl>
          <FormLabel className="text">&nbsp;</FormLabel>
          <TextField size="small" className="exper-big"></TextField>
        </FormControl>
      </div>
      <div>
        <FormControl>
          <FormLabel className="text">Maximum</FormLabel>
          <TextField size="small" className="exper-big"></TextField>
        </FormControl>
        <FormControl>
          <FormLabel className="text">&nbsp;</FormLabel>
          <TextField size="small" className="exper-big"></TextField>
        </FormControl>
      </div>

      <div className="exper-h5">
        <h5>Relevant Experience</h5>
      </div>
      <div>
        <FormControl>
          <FormLabel className="text">Minimum</FormLabel>
          <TextField size="small" className="exper-big"></TextField>
        </FormControl>
        <FormControl>
          <FormLabel className="text">&nbsp;</FormLabel>
          <TextField size="small" className="exper-big"></TextField>
        </FormControl>
      </div>
      <div>
        <FormControl>
          <FormLabel className="text">Minimum</FormLabel>
          <TextField size="small" className="exper-big"></TextField>
        </FormControl>
        <FormControl>
          <FormLabel className="text">&nbsp;</FormLabel>
          <TextField size="small" className="exper-big"></TextField>
        </FormControl>
      </div>
      <Edu />
      <Add />

    </div>
  );
};
