import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";

const ContactDetails = () => {
  const [linkInputs, setLinkInputs] = useState([""]); // State to store link inputs
  const [accountInputs, setAccountInputs] = useState([]); // State to store account inputs

  // Function to add a new text input field for the link
  const addLinkInput = () => {
    setLinkInputs([...linkInputs, ""]);
  };

  // Function to handle changes in the link text inputs
  const handleLinkInputChange = (index, value) => {
    const newLinkInputs = [...linkInputs];
    newLinkInputs[index] = value;
    setLinkInputs(newLinkInputs);
  };

  // Function to add a new text input field for the account
  const addAccountInput = () => {
    setAccountInputs([...accountInputs, ""]);
  };

  return (
    <form>
      <Typography variant="h5">Contact Details</Typography>
      {/* First Row */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography>Your college main website</Typography>
          <TextField placeholder="Website Link" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <Typography>Contact</Typography>
          <TextField placeholder="+91 00000 00000" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <Typography>Email ID</Typography>
          <TextField placeholder="timesedu@gmail.com" fullWidth />
        </Grid>
      </Grid>

      {/* Second Row */}
      <Grid container spacing={2}>
        {/* <Grid item xs={4}>
          <TextField label="Link" fullWidth />
        </Grid> */}
        <Grid item xs={4}>
          <Typography>Other websites/important links</Typography>
          {linkInputs.map((link, index) => (
            <TextField
              key={index}
              label={`Link ${index + 1}`}
              fullWidth
              value={link}
              onChange={(e) => handleLinkInputChange(index, e.target.value)}
            />
          ))}
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" onClick={addLinkInput}>
            +
          </Button>
        </Grid>
      </Grid>

      {/* Third Row */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography>Facebook Page</Typography>
          <TextField placeholder="Website Link" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <Typography>Instagram Account</Typography>
          <TextField placeholder="Website Link" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <Typography>LinkedIn Page</Typography>
          <TextField placeholder="Website Link" fullWidth />
        </Grid>
      </Grid>

      {/* Fourth Row */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography>YouTube Channel</Typography>
          <TextField placeholder="Website Link" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <Typography>Pinterest Account</Typography>
          <TextField placeholder="Website Link" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <Typography>Twitter Handle</Typography>
          <TextField placeholder="Website Link" fullWidth />
        </Grid>
      </Grid>

      {/* Fifth Row */}
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Button variant="contained" color="primary" onClick={addAccountInput}>
            Add More Accounts
          </Button>
        </Grid>
        {/* Additional Account Inputs */}
        {accountInputs.map((account, index) => (
          <TextField
            key={index}
            label={`Account ${index + 1}`}
            fullWidth
            value={account}
            // onChange={(e) => handleAccountInputChange(index, e.target.value)}
          />
        ))}
      </Grid>
    </form>
  );
};

export default ContactDetails;
