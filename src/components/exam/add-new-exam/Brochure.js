import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  Container,
} from "@mui/material";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useTheme } from "@mui/material/styles";

const Brochure = () => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;

  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };
  const [examsWhoCanRefer, setExamsWhoCanRefer] = useState("");
  const [linkInputs, setLinkInputs] = useState([""]);

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
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
          <strong>BROCHURE </strong>
        </em>
      </Typography>

      <Grid container spacing={6} mt={2}>
        <Grid item xs={4}>
          <label htmlFor="image-input">
            <Box
              border={1}
              borderColor={secondaryColor}
              borderRadius="4px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              padding="20px"
              height={"100%"}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="image-input"
              />
              <IconButton component="span">
                <FileUploadIcon fontSize="large" color={secondaryColor} />
              </IconButton>
              Upload Brochure
            </Box>
          </label>
        </Grid>

        <Grid item xs={4} container flexDirection={"column"} spacing={6}>
          <Grid item>
            <Typography>Add Description to the Brochure</Typography>
            <TextField
              placeholder="Describe here"
              fullWidth
              multiline
              minRows={3}
              maxRows={3}
            />
          </Grid>
          <Grid item>
            <Typography>Links (if any)</Typography>
            <Grid container alignItems={"end"} spacing={2}>
              <Grid xs={10} item>
                {linkInputs.map((link, index) => (
                  <Grid
                    key={index}
                    mb={index + 1 !== linkInputs.length ? 2 : 0}
                  >
                    <TextField
                      key={index}
                      label={`Link ${index + 1}`}
                      size="small"
                      margin="none"
                      fullWidth
                    />
                  </Grid>
                ))}
              </Grid>

              <Grid xs={2} mb={0} item>
                <Button
                  variant="outlined"
                  style={buttonNotSelectedStyle}
                  onClick={() => setLinkInputs([...linkInputs, ""])}
                >
                  +
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} container flexDirection={"column"} spacing={6}>
          <Grid item>
            <Typography>Enter keywords/ meta tags</Typography>
            <TextField
              placeholder="Describe here"
              fullWidth
              multiline
              minRows={3}
              maxRows={3}
            />
          </Grid>
          <Grid item>
            <Typography>Enter Exams who can refer</Typography>
            <FormControl fullWidth size="small">
              <Select
                onChange={(e) => setExamsWhoCanRefer(e.target.value)}
                value={examsWhoCanRefer}
                displayEmpty
                style={{
                  color: examsWhoCanRefer === "" && secondaryColor,
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
      </Grid>
    </Container>
  );
};

export default Brochure;
