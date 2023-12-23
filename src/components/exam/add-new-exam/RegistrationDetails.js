import React, { useState, useEffect } from "react";
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
import { checkUrl } from "../../../services/componentsFunctions";

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const paymentModes = [
  "Debit Card",
  "Credit Card",
  "UPI",
  "NEFT",
  "Net Banking",
  "Other",
];

const RegistrationDetails = ({ setRegistrationDetails }) => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;

  const [addMoreCategoryFee, setAddMoreCategoryFee] = useState([""]);

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
  };

  const [formData, setFormData] = useState({
    registration_website: "",
    registration_mode: "",
    payment_modes: [],
    category: "",
    fee: "",
    registration_fees: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handlePaymentsModeChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      payment_modes: typeof value === "string" ? value.split(",") : value,
    });
  };

  useEffect(() => {
    setRegistrationDetails(formData);
  }, [formData, setRegistrationDetails]);

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
              value={formData.registration_website}
              onChange={handleInputChange("registration_website")}
              error={
                formData.registration_website === ""
                  ? false
                  : !checkUrl(formData.registration_website)
              }
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Registration Mode</Typography>
            <FormControl fullWidth size="small">
              <Select
                value={formData.registration_mode}
                onChange={handleInputChange("registration_mode")}
                displayEmpty
                style={{
                  color: formData.registration_mode === "" && secondaryColor,
                }}
              >
                <MenuItem value={""} disabled>
                  Select/ Type Here
                </MenuItem>
                <MenuItem value="online "> Online </MenuItem>
                <MenuItem value="offline "> Offline </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Typography>Payment Modes Available</Typography>
            <FormControl fullWidth size="small">
              <Select
                multiple
                value={formData.payment_modes}
                onChange={handlePaymentsModeChange}
                style={{
                  color: formData.payment_modes === "" && secondaryColor,
                }}
                displayEmpty
                renderValue={
                  formData.payment_modes.length !== 0
                    ? undefined
                    : () => (
                        <Typography color={secondaryColor}>
                          Select/ Type Here
                        </Typography>
                      )
                }
              >
                {paymentModes.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, paymentModes, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container flexDirection={"column"} mt={2} spacing={6}>
          <Grid item>
            <Typography variant="h6">Registration</Typography>
          </Grid>
          <Grid container spacing={6} item>
            {addMoreCategoryFee.map((data, index) => (
              <Grid key={index} item xs={6} container spacing={4}>
                <Grid item xs={6}>
                  <Typography>Category</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      value={formData.category}
                      onChange={handleInputChange("category")}
                      displayEmpty
                      style={{
                        color: formData.category === "" && secondaryColor,
                      }}
                    >
                      <MenuItem value={""} disabled>
                        Select/ Type Here
                      </MenuItem>
                      <MenuItem value="general">General</MenuItem>
                      <MenuItem value="obc">OBC</MenuItem>
                      <MenuItem value="sc">SC</MenuItem>
                      <MenuItem value="st">ST</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Fees</Typography>
                  <TextField
                    placeholder="Type Here"
                    size="small"
                    fullWidth
                    type="number"
                    value={formData.fee}
                    onChange={handleInputChange("fee")}
                  />
                </Grid>
              </Grid>
            ))}
            <Grid item xs={6} container spacing={4}>
              <Grid item xs={6}>
                <Typography>Category</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    value={formData.category}
                    onChange={handleInputChange("category")}
                    displayEmpty
                    style={{
                      color: formData.category === "" && secondaryColor,
                    }}
                  >
                    <MenuItem value={""} disabled>
                      Select/ Type Here
                    </MenuItem>
                    <MenuItem value="general">General</MenuItem>
                    <MenuItem value="obc">OBC</MenuItem>
                    <MenuItem value="sc">SC</MenuItem>
                    <MenuItem value="st">ST</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <Typography>Fees</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={10}>
                    <TextField
                      placeholder="Type Here"
                      size="small"
                      fullWidth
                      value={formData.registration_fees}
                      onChange={handleInputChange("registration_fees")}
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      variant="outlined"
                      style={buttonNotSelectedStyle}
                      onClick={() =>
                        setAddMoreCategoryFee([...addMoreCategoryFee, ""])
                      }
                    >
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
