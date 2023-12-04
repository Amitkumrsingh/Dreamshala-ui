import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ManagementContact = () => {
  const theme = useTheme();

  const [contacts, setContacts] = useState([
    { name: "", role: "", email: "" },
    { mobile: "", col2: "", col3: "" },
  ]);

  // Function to add a new set of contact fields
  const addContact = () => {
    setContacts([
      ...contacts,
      { name: "", role: "", email: "", mobile: "", col2: "", col3: "" },
    ]);
  };

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
      >
        <em>
          <strong>MANAGEMENT CONTACT </strong>
        </em>
        <Typography variant="span">(For Office Use Only)</Typography>
      </Typography>
      {/* First Row */}
      <Grid container spacing={6} mt={2}>
        <Grid item xs={4}>
          <Typography>Name</Typography>
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
          <Typography>Role in the Institute</Typography>
          <TextField
            // label="Role in the Institute"
            placeholder="Type Here"
            size="small"
            fullWidth
            value={contacts[0].role}
            onChange={(e) => handleContactChange(0, "role", e.target.value)}
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
            onChange={(e) => handleContactChange(0, "email", e.target.value)}
          />
        </Grid>
      </Grid>

      {/* Second Row */}
      <Grid container spacing={6} mt={2}>
        <Grid item xs={4}>
          <Typography>Contact</Typography>
          <TextField
            // label="Mobile Number"
            size="small"
            placeholder="+91 00000 00000"
            fullWidth
            value={contacts[1].mobile}
            onChange={(e) => handleContactChange(1, "mobile", e.target.value)}
          />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>

      {/* Additional Contact Fields */}
      {contacts.slice(2).map((contact, index) => (
        <Grid key={index}>
          <Grid container spacing={6} mt={2}>
            <Grid item xs={4}>
              <Typography>Name</Typography>
              <TextField
                // label="Name"
                placeholder="Type Here"
                fullWidth
                value={contact.name}
                size="small"
                onChange={(e) =>
                  handleContactChange(index + 2, "name", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>Role in the Institute</Typography>
              <TextField
                // label="Role in the Institute"
                placeholder="Type Here"
                fullWidth
                value={contact.role}
                size="small"
                onChange={(e) =>
                  handleContactChange(index + 2, "role", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>Email ID</Typography>
              <TextField
                // label="Email ID"
                placeholder="timesedu@gmail.com"
                fullWidth
                value={contact.email}
                size="small"
                onChange={(e) =>
                  handleContactChange(index + 2, "email", e.target.value)
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={6} mt={2}>
            <Grid item xs={4}>
              <Typography>Contact</Typography>
              <TextField
                placeholder="+91 00000 00000"
                fullWidth
                value={contacts[1].mobile}
                size="small"
                onChange={(e) =>
                  handleContactChange(1, "mobile", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Grid>
      ))}

      {/* Button to add more contacts */}
      <Grid mt={6}>
        <Button variant="outlined" color="primary" onClick={addContact}>
          Add More Contacts
        </Button>
      </Grid>
    </Container>
  );
};

export default ManagementContact;
