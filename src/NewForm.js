import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { FormControl, FormLabel } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { styled } from "@mui/material/styles";
import { Exper } from "./Exper";
import { InfoForm } from "./InfoForm";
import { Footer } from "./Footer";
import './NewForm.css';

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

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
        <div className="left-frame">
          <div className="profile-frame">
            <div className="avatar-frame">
              <Avatar alt="Avatar" src="" />
            </div>
            <div className="name-frame">
              <h2>Syed Mohseen</h2>
              <Button
                className="file-upload"
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<NoteAddIcon />}
              >
                Resume Upload
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => console.log(event.target.files)}
                  multiple
                />
              </Button>
            </div>
          </div>
          <div className="info-frame">
            <h3 className="head-text">Complete the profile</h3>
            <span className="info-text">
              To successfully finalize the candidate profile,it is imperative to
              provide all required information in each designated section.
            </span>
            <h5>Syed Mohseen</h5>
          </div>
        </div>
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
