import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const RegistrationDetails = () => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;

  const [registrationMode, setRegistrationMode] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [category, setCategory] = useState("");

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
  };

  return (
    <>
      <Container>
        <Grid mb={2}>
          <Typography
            variant="h5"
            gutterBottom
            borderLeft={"4px solid " + theme.palette.primary.main}
            padding={1}
            mb={2}
          >
            <em>
              <strong>REGISTRATION DETAILS </strong>
            </em>
          </Typography>
        </Grid>

        <Grid container spacing={6} mt={2}>
          <Grid item xs={4}>
            <Typography>Website for registration</Typography>
            <TextField
              type="text"
              placeholder="Type Here"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Registration Mode</Typography>
            <FormControl fullWidth size="small">
              <Select
                onChange={(e) => setRegistrationMode(e.target.value)}
                value={registrationMode}
                displayEmpty
                style={{
                  color: registrationMode === "" && secondaryColor,
                }}
              >
                <MenuItem value={""} disabled>
                  Select/ Type Here
                </MenuItem>
                <MenuItem value="1"> 1</MenuItem>
                <MenuItem value="2"> 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Typography>Payment Modes Available</Typography>
            <FormControl fullWidth size="small">
              <Select
                onChange={(e) => setPaymentMode(e.target.value)}
                value={paymentMode}
                displayEmpty
                style={{
                  color: paymentMode === "" && secondaryColor,
                }}
              >
                <MenuItem value={""} disabled>
                  Select/ Type Here
                </MenuItem>
                <MenuItem value="1"> 1</MenuItem>
                <MenuItem value="2"> 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container flexDirection={"column"} mt={2} spacing={6}>
          <Grid item>
            <Typography variant="h6">Registration</Typography>
          </Grid>
          <Grid container spacing={6} item>
            <Grid item xs={6} container spacing={4}>
              <Grid item xs={6}>
                <Typography>Category</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    displayEmpty
                    style={{
                      color: category === "" && secondaryColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    <MenuItem value="1"> 1</MenuItem>
                    <MenuItem value="2"> 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <Typography>Fees</Typography>
                <TextField placeholder="Type Here" size="small" fullWidth />
              </Grid>
            </Grid>
            <Grid item xs={6} container spacing={4}>
              <Grid item xs={6}>
                <Typography>Category</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    displayEmpty
                    style={{
                      color: category === "" && secondaryColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    <MenuItem value="1"> 1</MenuItem>
                    <MenuItem value="2"> 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <Typography>Fees</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={10}>
                    <TextField placeholder="Type Here" size="small" fullWidth />
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="outlined" style={buttonNotSelectedStyle}>
                      +
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default RegistrationDetails;
