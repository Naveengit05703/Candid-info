import React from 'react'
import Avatar from "@mui/material/Avatar";
import { FormControl, FormLabel } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';
import './Left.css';

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

  function valuetext(value: number) {
    return `${value}°C`;
  }
  
export const Left = () => {
  return (
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
        <h6>{4} Missing information</h6>
        <Box className="Box" sx={{ width: 200 }}>
          <span sx={{}}>80%</span>
          <Slider
            aria-label="Temperature"
            defaultValue={80}
            getAriaValueText={valuetext}
            color="success"
          />
        </Box>
        <div className="info-d">
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem>
            <CheckIcon className="check-active"/>
              <ListItemText primary="Candidate information" />
              <EditIcon className='edit-icon'/>
            </ListItem>
            <ListItem>
            <CheckIcon className="check-active"/>
              <ListItemText primary="Candidate Experiences" />
              <EditIcon className='edit-icon'/>
            </ListItem>
            <ListItem>
            <CheckIcon className="check-active"/>
              <ListItemText primary="Project Description" />
              <EditIcon className='edit-icon' />
            </ListItem>
            <ListItem>
                <CheckIcon className="check-in-active"/>
              <ListItemText primary="Employment Tenure" />
              <EditIcon className='edit-icon-in'/>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}
