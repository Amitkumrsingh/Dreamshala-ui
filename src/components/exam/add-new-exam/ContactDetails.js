import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ContactDetails = () => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
  };

  const [contacts, setContacts] = useState([
    { name: "", role: "", email: "" },
    { mobile: "", col2: "", col3: "" },
  ]);

  const [addMoreContact, setAddMoreContact] = useState([""]);

  // Function to handle changes in the contact fields
  const handleContactChange = (index, field, value) => {
    const newContacts = [...contacts];
    newContacts[index][field] = value;
    setContacts(newContacts);
  };

  return (
    <Container>
      <Typography
        variant="h5"
        gutterBottom
        borderLeft={"4px solid " + theme.palette.primary.main}
        padding={1}
        mb={2}
      >
        <em>
          <strong>CONTACT DETAILS </strong>
        </em>
      </Typography>

      {addMoreContact.map((data, index) => (
        <Grid key={index}>
          {/* First Row */}
          <Grid container spacing={6} mt={2}>
            <Grid item xs={4}>
              <Typography>Exam official website</Typography>
              <TextField
                // label="Name"
                placeholder="Type Here"
                size="small"
                fullWidth
                value={contacts[0].name}
                onChange={(e) => handleContactChange(0, "name", e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>Contact</Typography>
              <TextField
                // label="Mobile Number"
                size="small"
                placeholder="+91 00000 00000"
                fullWidth
                value={contacts[1].mobile}
                onChange={(e) =>
                  handleContactChange(1, "mobile", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>Email ID</Typography>
              <TextField
                // label="Email ID"
                placeholder="timesedu@gmail.com"
                size="small"
                fullWidth
                value={contacts[0].email}
                onChange={(e) =>
                  handleContactChange(0, "email", e.target.value)
                }
              />
            </Grid>
          </Grid>

          {/* Second Row */}
          <Grid container spacing={6} mt={2}>
            <Grid item xs={4}>
              <Typography>Other websites/impotant links</Typography>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <TextField
                    // label="Mobile Number"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button
                    fullWidth
                    variant="outlined"
                    style={buttonNotSelectedStyle}
                  >
                    +
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Grid>
      ))}

      {/* Button to add more contacts */}
      <Grid mt={6}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setAddMoreContact([...addMoreContact, ""])}
        >
          Add More Contacts
        </Button>
      </Grid>
    </Container>
  );
};

export default ContactDetails;
