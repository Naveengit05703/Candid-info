import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, FormLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import "./InfoForm.css";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
const label = { inputProps: { "aria-label": "Same as Permenent Address" } };

const Textarea = styled(BaseTextareaAutosize)(() => {});

export const InfoForm = () => {
  return (
    <div className="information-frame">
      <h3>
        Candidate <span className="blue-text">Information</span>
      </h3>
      <FormControl>
        <FormLabel className="txt">First Name</FormLabel>
        <TextField
          size="small"
          placeholder="First Name"
          className="big"
        ></TextField>
      </FormControl>
      <FormControl>
        <FormLabel className="txt">Last Name</FormLabel>
        <TextField
          size="small"
          placeholder="Last Name"
          className="big"
        ></TextField>
      </FormControl>
      <FormControl>
        <FormLabel className="txt">Primary Phone</FormLabel>
        <TextField
          size="small"
          placeholder="Number"
          className="middle"
        ></TextField>
      </FormControl>
      <FormControl>
        <FormLabel className="txt">Secondary Phone</FormLabel>
        <TextField
          size="small"
          placeholder="Number"
          className="middle"
        ></TextField>
      </FormControl>
      <FormControl>
        <FormLabel className="txt">Primary Email</FormLabel>
        <TextField size="small" placeholder="Email" className="big"></TextField>
      </FormControl>
      <FormControl>
        <FormLabel className="txt">Secondary Email</FormLabel>
        <TextField size="small" placeholder="Email" className="big"></TextField>
      </FormControl>
      <FormControl>
        <FormLabel className="txt">Date of Birth</FormLabel>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker className="min-dob" closeOnSelect />
        </LocalizationProvider>
      </FormControl>
      <FormControl>
        <FormLabel className="txt">Identity proof-Document</FormLabel>
        <TextField
          size="small"
          placeholder="Enter"
          className="min-1"
        ></TextField>
      </FormControl>
      <FormControl>
        <FormLabel className="txt">Identity proof-Number</FormLabel>
        <TextField
          size="small"
          placeholder="Number"
          className="big"
        ></TextField>
      </FormControl>
      <FormControl>
        <FormLabel className="txt">Gender</FormLabel>
        <Select className="min" size="small">
          <MenuItem>Male</MenuItem>
          <MenuItem>Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <TextField size="small" className="min-input"></TextField>
      </FormControl>
      <div className="info-part">
        <div className="info-left">
          <FormControl>
            <FormLabel className="txt">Current Address</FormLabel>
            <Textarea placeholder="Enter the text..."/>
          </FormControl>
        </div>
        <div className="info-right">
          <FormControl>
            <FormLabel className="txt">City</FormLabel>
            <Select className="min" size="small">
              <MenuItem>Chennai</MenuItem>
              <MenuItem>Mumbai</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel className="txt">Pin Code</FormLabel>
            <TextField size="small" className="min-1"></TextField>
          </FormControl>
          <FormControl>
            <FormLabel className="txt">State</FormLabel>
            <TextField size="small" className="min"></TextField>
          </FormControl>
          <FormControl>
            <FormLabel className="txt">Country</FormLabel>
            <TextField size="small" className="min-1"></TextField>
          </FormControl>
        </div>
      </div>
      <div className="info-last">
        <FormControl>
          <FormLabel className="text">Permanent Address <Checkbox {...label} defaultChecked /> same as above</FormLabel>
          
        </FormControl>
      </div>
    </div>
  );
};
