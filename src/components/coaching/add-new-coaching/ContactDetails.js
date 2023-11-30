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
      <Grid container spacing={2} mt={4}>
        <Grid item xs={4}>
          <Typography>Your class main website</Typography>
          <TextField placeholder="Website Link" fullWidth size="small" />
        </Grid>
        <Grid item xs={4}>
          <Typography>Contact</Typography>
          <TextField placeholder="+91 00000 00000" fullWidth size="small" />
        </Grid>
        <Grid item xs={4}>
          <Typography>Email ID</Typography>
          <TextField placeholder="timesedu@gmail.com" fullWidth size="small" />
        </Grid>
      </Grid>

      {/* Second Row */}
      <Grid container spacing={2} mt={2}>
        <Grid item xs={4} alignItems={"center"}>
          <Grid>
            <Typography>Other websites/important links</Typography>
          </Grid>
          <Grid container alignItems={"end"}>
            <Grid xs={10}>
              {linkInputs.map((link, index) => (
                <Grid key={index} mb={index + 1 !== linkInputs.length ? 2 : 0}>
                  <TextField
                    key={index}
                    label={`Link ${index + 1}`}
                    size="small"
                    margin="none"
                    fullWidth
                    value={link}
                    onChange={(e) =>
                      handleLinkInputChange(index, e.target.value)
                    }
                  />
                </Grid>
              ))}
            </Grid>

            <Grid xs={2} mb={0}>
              <Button
                variant="contained"
                color="primary"
                onClick={addLinkInput}
              >
                +
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Third Row */}
      <Grid container spacing={2} mt={2}>
        <Grid item xs={4}>
          <Typography>Facebook Page</Typography>
          <TextField placeholder="Website Link" fullWidth size="small" />
        </Grid>
        <Grid item xs={4}>
          <Typography>Instagram Account</Typography>
          <TextField placeholder="Website Link" fullWidth size="small" />
        </Grid>
        <Grid item xs={4}>
          <Typography>LinkedIn Page</Typography>
          <TextField placeholder="Website Link" fullWidth size="small" />
        </Grid>
      </Grid>

      {/* Fourth Row */}
      <Grid container spacing={2} mt={2}>
        <Grid item xs={4}>
          <Typography>YouTube Channel</Typography>
          <TextField placeholder="Website Link" fullWidth size="small" />
        </Grid>
        <Grid item xs={4}>
          <Typography>Pinterest Account</Typography>
          <TextField placeholder="Website Link" fullWidth size="small" />
        </Grid>
        <Grid item xs={4}>
          <Typography>Twitter Handle</Typography>
          <TextField placeholder="Website Link" fullWidth size="small" />
        </Grid>
      </Grid>

      {/* Fifth Row */}
      <Grid container spacing={2} mt={2}>
        {/* Additional Account Inputs */}
        {accountInputs.map((account, index) => (
          <Grid item key={index} xs={4}>
            <TextField
              label={`Account ${index + 1}`}
              fullWidth
              value={account}
              size="small"
              // onChange={(e) => handleAccountInputChange(index, e.target.value)}
            />
          </Grid>
        ))}

        <Grid item xs={2}>
          <Button variant="outlined" color="primary" onClick={addAccountInput}>
            Add More Accounts
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactDetails;
