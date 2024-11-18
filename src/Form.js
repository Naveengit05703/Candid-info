import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { FormControl, FormLabel } from "@mui/material";
import Container from "@mui/material/Container";

function form() {
  return (
    <Container sx={{ bgcolor: "#CCC", height: "100%" }}>
      <div className="top-navigation">
        <Stack direction="row" spacing={4}>
          <Button variant="contained" sx={{ bgcolor: "#2e6279" }}>
            Job Description
          </Button>
          <Button variant="contained" sx={{ bgcolor: "#3e8174" }}>
            Client profile
          </Button>
          <Button variant="contained" sx={{ bgcolor: "#49a385" }}>
            Recruiter Pitch
          </Button>
          <Button variant="contained" sx={{ bgcolor: "#42c7ad" }}>
            Share
          </Button>
        </Stack>
      </div>
      <Container
        className="top-frame"
        sx={{
          bgcolor: "#FFF",
          height: "40vh",
          margin: "2px",
          marginTop: "10vh",
        }}
      >
        <FormControl>
          <FormLabel>Client Name</FormLabel>
          <TextField label="Type" bgcolor="#BBDEFB"></TextField>
        </FormControl>
        <FormControl>
          <FormLabel>Skill</FormLabel>
          <TextField label="Type" bgcolor="#BBDEFB"></TextField>
        </FormControl>
        <FormControl>
          <FormLabel>Job Type</FormLabel>
          <TextField label="Type" bgcolor="#BBDEFB"></TextField>
        </FormControl>
        <FormControl>
          <FormLabel>Job Location</FormLabel>
          <TextField label="Type" bgcolor="#BBDEFB"></TextField>
        </FormControl>
        <FormControl>
          <FormLabel>Recruiter code</FormLabel>
          <TextField label="Type" bgcolor="#BBDEFB"></TextField>
        </FormControl>
        <FormControl>
          <FormLabel>Date</FormLabel>
          <TextField label="dd/mm/yyyy" color="#BBDEFB"></TextField>
        </FormControl>
      </Container>
      <div className="row">
        <div className="col">
            {'left column'}
        <div className="row">
            <div className="col">
              <div className="row">
                <div className="col">
                  <Avatar alt="Remy Sharp" src="" />
                </div>
                <div className="col">
                  <h3>Syed Mosheen</h3>
                </div>                
              </div>
              <div className="row">
                <div className="col">
                        <h5>Complete the profile</h5>
                        <span >
                        To successfully finalize the candidate profile,it is
                        imperative to provide all required information in each
                        designated section.
                        </span>
                    </div>
                </div>            
            </div>
          </div>  
        </div>

        <div className="col">
        {'right column'}
          <div className="row">
            <div className="col">
              <Container
                sx={{
                  bgcolor: "#FFF",
                  height: "40vh",
                  margin: "2px",
                  marginTop: "5vh",
                }}
              >
                <h3>Candidate Information</h3>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <TextField></TextField>
                </FormControl>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <TextField></TextField>
                </FormControl>
                <FormControl>
                  <FormLabel>Primary Phone</FormLabel>
                  <TextField></TextField>
                </FormControl>
                <FormControl>
                  <FormLabel>Secondary Phone</FormLabel>
                  <TextField></TextField>
                </FormControl>
                <FormControl>
                  <FormLabel>Primary Email</FormLabel>
                  <TextField></TextField>
                </FormControl>
                <FormControl>
                  <FormLabel>Secondary Email</FormLabel>
                  <TextField></TextField>
                </FormControl>
                <FormControl>
                  <FormLabel>Date of Birth</FormLabel>
                  <TextField></TextField>
                </FormControl>
                <FormControl>
                  <FormLabel>Identity proof-Document</FormLabel>
                  <TextField></TextField>
                </FormControl>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default form;
