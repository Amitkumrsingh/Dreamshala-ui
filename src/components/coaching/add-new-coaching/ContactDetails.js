import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  checkUrl,
  checkContact,
  checkEmail,
} from "../../../services/componentsFunctions";

const ContactDetails = ({ setContactDetails }) => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
  };

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

  const [formData, setFormData] = useState({
    coaching_main_website: "",
    contact_number: "",
    email: "",
    other_links: "",
    facebook_page: "",
    instagram_account: "",
    linkedin_page: "",
    youtube_channel: "",
    pinterest_account: "",
    twitter_handle: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  useEffect(() => {
    setContactDetails({ ...formData });
  }, [formData, setContactDetails]);

  return (
    <Container>
      <Grid>
        <Typography
          variant="h5"
          gutterBottom
          borderLeft={"4px solid " + theme.palette.primary.main}
          padding={1}
        >
          <em>
            <strong>CONTACT DETAILS</strong>
          </em>
        </Typography>
      </Grid>
      {/* First Row */}
      <Grid container spacing={6} mt={2}>
        <Grid item xs={4}>
          <Typography>Your coaching main website</Typography>
          <TextField
            placeholder="Website Link"
            fullWidth
            size="small"
            value={formData.coaching_main_website}
            onChange={handleInputChange("coaching_main_website")}
            error={
              formData.coaching_main_website === ""
                ? false
                : !checkUrl(formData.coaching_main_website)
            }
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Contact</Typography>
          <TextField
            placeholder="+91 00000 00000"
            fullWidth
            size="small"
            type="tel"
            name="phone"
            value={formData.contact_number}
            onChange={handleInputChange("contact_number")}
            error={
              formData.contact_number === ""
                ? false
                : !checkContact(formData.contact_number)
            }
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Email ID</Typography>
          <TextField
            placeholder="timesedu@gmail.com"
            fullWidth
            size="small"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange("email")}
            error={formData.email === "" ? false : !checkEmail(formData.email)}
          />
        </Grid>
      </Grid>

      {/* Second Row */}
      <Grid container spacing={6} mt={2}>
        <Grid item xs={4} alignItems={"center"}>
          <Grid>
            <Typography>Other websites/important links</Typography>
          </Grid>
          <Grid container alignItems={"end"} spacing={2}>
            <Grid xs={10} item>
              {linkInputs.map((link, index) => (
                <Grid key={index} mb={index + 1 !== linkInputs.length ? 2 : 0}>
                  <TextField
                    key={index}
                    placeholder={`Link ${index + 1}`}
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

            <Grid xs={2} mb={0} item>
              <Button
                variant="outlined"
                style={buttonNotSelectedStyle}
                onClick={addLinkInput}
              >
                +
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Third Row */}
      <Grid container spacing={6} mt={2}>
        <Grid item xs={4}>
          <Typography>Facebook Page</Typography>
          <TextField
            placeholder="Facebook Link"
            fullWidth
            size="small"
            value={formData.facebook_page}
            onChange={handleInputChange("facebook_page")}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Instagram Account</Typography>
          <TextField
            placeholder="Instagram Link"
            fullWidth
            size="small"
            value={formData.instagram_account}
            onChange={handleInputChange("instagram_account")}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>LinkedIn Page</Typography>
          <TextField
            placeholder="LinkedIn Link"
            fullWidth
            size="small"
            value={formData.linkedin_page}
            onChange={handleInputChange("linkedin_page")}
          />
        </Grid>
      </Grid>

      {/* Fourth Row */}
      <Grid container spacing={6} mt={2}>
        <Grid item xs={4}>
          <Typography>YouTube Channel</Typography>
          <TextField
            placeholder="Website Link"
            fullWidth
            size="small"
            value={formData.youtube_channel}
            onChange={handleInputChange("youtube_channel")}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Pinterest Account</Typography>
          <TextField
            placeholder="Website Link"
            fullWidth
            size="small"
            value={formData.pinterest_account}
            onChange={handleInputChange("pinterest_account")}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Twitter Handle</Typography>
          <TextField
            placeholder="Website Link"
            fullWidth
            size="small"
            value={formData.twitter_handle}
            onChange={handleInputChange("twitter_handle")}
          />
        </Grid>
      </Grid>

      {/* Fifth Row */}
      <Grid container spacing={6} mt={2}>
        {/* Additional Account Inputs */}
        {accountInputs.map((account, index) => (
          <Grid item key={index} xs={4}>
            <TextField
              label={`Account ${index + 1}`}
              fullWidth
              size="small"
              value={account}
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
    </Container>
  );
};

export default ContactDetails;
