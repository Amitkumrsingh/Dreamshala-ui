import React from "react";
import {
  IconButton,
  Box,
  Button,
  Grid,
  TextField,
  Container,
  Typography,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const PlacementDetails = () => {
  const [addMorePlacement, setAddMorePlacement] = React.useState([""]);
  return (
    <>
      <Container>
        <Grid container justifyContent={"space-between"}>
          <Typography variant="h5" gutterBottom>
            PLACEMENT DETAILS
          </Typography>
          <label htmlFor="image-input">
            <Box
              border={1}
              borderColor="grey.500"
              borderRadius="4px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              paddingRight={"10px"}
            >
              <input
                type="file"
                accept="file/*"
                //   onChange={handleImageChange}
                style={{ display: "none" }}
                id="image-input"
              />
              <IconButton component="span">
                <UploadFileIcon fontSize="small" color="primary" />
              </IconButton>
              Upload Excel
              {/* You can display the selected image here if needed */}
            </Box>
          </label>
        </Grid>

        {addMorePlacement.map((data, index) => (
          <Grid mb={4} key={index}>
            <Grid container mb={2} spacing={2}>
              <Grid item xs={4}>
                <Typography>Degree/ Branch</Typography>
                <FormControl fullWidth size="small">
                  <Select defaultValue={""}>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Grid>
                  <Typography>Describe the overall placement</Typography>
                  <TextField
                    placeholder="Describe here"
                    multiline
                    fullWidth
                    minRows={4}
                    maxRows={4}
                  />
                </Grid>
                <Grid mt={2}>
                  <Typography>Highest Package</Typography>
                  <FormControl fullWidth size="small">
                    <Select defaultValue={""}>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid>
                  <Typography>Number of Recruiters</Typography>
                  <FormControl fullWidth size="small">
                    <Select defaultValue={""}>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid mt={3}>
                  <Typography>Number of International Offers</Typography>
                  <FormControl fullWidth size="small">
                    <Select defaultValue={""}>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid mt={3}>
                  <Typography>Average Package</Typography>
                  <FormControl fullWidth size="small">
                    <Select defaultValue={""}>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid>
                  <Typography>Number of Offers</Typography>
                  <FormControl fullWidth size="small">
                    <Select defaultValue={""}>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid mt={3}>
                  <Typography>
                    Top Recruiters (use ','to separate them)
                  </Typography>
                  <FormControl fullWidth size="small">
                    <Select defaultValue={""}>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid mt={3}>
                  <Typography>.</Typography>
                  <TextField
                    placeholder="+ Add a Field"
                    fullWidth
                    size="small"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Button
          m={2}
          variant="contained"
          color="primary"
          onClick={() => setAddMorePlacement([...addMorePlacement, ""])}
        >
          + Add More Details
        </Button>
      </Container>
    </>
  );
};

export default PlacementDetails;
