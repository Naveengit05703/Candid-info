import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FormControl, FormLabel } from "@mui/material";
import { Exper } from "./Exper";
import { InfoForm } from "./InfoForm";
import { Footer } from "./Footer";
import './NewForm.css';
import { Left } from "./Left";

function newForm() {
  return (
    <div className="container">
      <label className="title-text">Recruit Card</label>
      <div className="nav-frame">
        <Stack direction="row" spacing={4}>
          <Button variant="contained" sx={{ bgcolor: "#012e40" }}>
            Job Description
          </Button>
          <Button variant="contained" sx={{ bgcolor: "#024959" }}>
            Client profile
          </Button>
          <Button variant="contained" sx={{ bgcolor: "#026773" }}>
            Recruiter Pitch
          </Button>
          <Button variant="contained" sx={{ bgcolor: "#3ca6a6" }}>
            Share
          </Button>
        </Stack>
      </div>
      <div className="top-frame">
        <FormControl>
          <FormLabel>Client Name</FormLabel>
          <TextField label="Type" size="small"></TextField>
        </FormControl>
        <FormControl>
          <FormLabel>Skill</FormLabel>
          <TextField label="Type" size="small"></TextField>
        </FormControl>
        <FormControl>
          <FormLabel>Job Type</FormLabel>
          <TextField label="Type" size="small"></TextField>
        </FormControl>
        <FormControl>
          <FormLabel>Job Location</FormLabel>
          <TextField label="Type" size="small"></TextField>
        </FormControl>
        <FormControl>
          <FormLabel>Recruiter code</FormLabel>
          <TextField label="Type" size="small"></TextField>
        </FormControl>
        <FormControl>
          <FormLabel>Date</FormLabel>
          <TextField label="dd/mm/yyyy" size="small"></TextField>
        </FormControl>
      </div>
      <div className="middle-frame">
        <Left/>
        <div className="right-frame">
          <InfoForm />
          <Exper />
          <div className="next">
        <Button variant="contained"><span className="next-size">Next</span></Button>
      </div>
        </div>
      </div>
      <div className="end">
        <Footer />
      </div>
    </div>
  );
}

export default newForm;
