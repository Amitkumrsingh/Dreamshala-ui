import React, { useEffect, useState } from "react";
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

const PreviousCutoffs = ({ setPreviousCutoffs }) => {
  const theme = useTheme();
  const placeholderColor = theme.palette.text.secondary;
  const [addMoreCutOffs, setAddMoreCutOffs] = useState([""]);
  const [degreeBranch, setDegreeBranch] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [subject, setSubject] = useState("");

  const [moreCategoryPercentile, setMoreCategoryPercentile] = useState([""]);
  const [moreSubjectWise, setMoreSubjectWise] = useState([]);
  const [formData, setFormData] = useState({
    degree_branch: "",
    parameter_of_cutoffs: "",
    category: "",
    percentile: "",
    subject: "",
    subject_category: "",
    cutoff_percentile: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  useEffect(() => {
    setPreviousCutoffs(formData);
  }, [formData, setPreviousCutoffs]);

  return (
    <>
      <Container>
        <Grid mb={4}>
          <Typography
            variant="h5"
            gutterBottom
            borderLeft={"4px solid " + theme.palette.primary.main}
            padding={1}
            mb={2}
          >
            <em>
              <strong>PREVIOUS CUTOFFS</strong>
            </em>
          </Typography>
        </Grid>

        {addMoreCutOffs.map((data, index) => (
          <Grid key={index} mb={6}>
            <Grid container spacing={6} mt={2}>
              <Grid xs={4} item>
                <Typography>Degree/ Branch</Typography>
                <TextField
                  fullWidth
                  placeholder="Type here"
                  value={formData.degree_branch}
                  onChange={handleInputChange("degree_branch")}
                  size="small"
                />
              </Grid>
            </Grid>

            <Grid container spacing={6} mt={2}>
              <Grid xs={6} item>
                <Typography>Describe the parameters of cutoffs</Typography>
                <TextField
                  fullWidth
                  placeholder="Describe here"
                  multiline
                  minRows={4.5}
                  maxRows={4.5}
                  value={formData.parameter_of_cutoffs}
                  onChange={handleInputChange("parameter_of_cutoffs")}
                />
              </Grid>
              <Grid xs={6} item>
                <Grid>
                  <Grid container spacing={6} flexDirection={"column"}>
                    {moreCategoryPercentile.map((data, index) => (
                      <Grid item container spacing={6} key={index}>
                        <Grid xs={6} item>
                          <Typography>Select Category</Typography>
                          <FormControl fullWidth size="small">
                            <Select
                              value={formData.category}
                              onChange={handleInputChange("category")}
                              displayEmpty
                              style={{
                                color:
                                  formData.category === "" && placeholderColor,
                              }}
                            >
                              <MenuItem value={""} disabled>
                                Select/ Type Here
                              </MenuItem>
                              {/* <MenuItem value="general">General</MenuItem>
                              <MenuItem value="obc">OBC</MenuItem>
                              <MenuItem value="sc">SC</MenuItem>
                              <MenuItem value="st">ST</MenuItem> */}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid xs={6} item>
                          <Typography>Overall Percentile</Typography>
                          <TextField
                            placeholder="Type Here"
                            size="small"
                            fullWidth
                            value={formData.percentile}
                            onChange={handleInputChange("percentile")}
                          />
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid container spacing={6} mt={1}>
                    <Grid xs={6} item>
                      <Typography>Select Category</Typography>
                      <FormControl fullWidth size="small">
                        <Select
                          value={formData.category}
                          onChange={handleInputChange("category")}
                          displayEmpty
                          style={{
                            color: selectCategory === "" && placeholderColor,
                          }}
                        >
                          <MenuItem value={""} disabled>
                            Select/ Type Here
                          </MenuItem>
                          {/* <MenuItem value="general">General</MenuItem>
                          <MenuItem value="obc">OBC</MenuItem>
                          <MenuItem value="sc">SC</MenuItem>
                          <MenuItem value="st">ST</MenuItem> */}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid xs={6} item>
                      <Typography>Overall Percentile</Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={10}>
                          <TextField
                            placeholder="Type Here"
                            size="small"
                            fullWidth
                            value={formData.percentile}
                            onChange={handleInputChange("percentile")}
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Button
                            variant="outlined"
                            fullWidth
                            onClick={() =>
                              setMoreCategoryPercentile([
                                ...moreCategoryPercentile,
                                "",
                              ])
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
            </Grid>

            <Grid container spacing={6} flexDirection={"column"} mt={2}>
              <Grid item container spacing={6} flexDirection={"column"}>
                <Grid item>
                  <Typography variant="subtitle2">
                    Subject Wise Cutoff
                  </Typography>
                </Grid>

                {moreSubjectWise.map((data, index) => (
                  <Grid item key={index}>
                    <Grid container spacing={6}>
                      <Grid item xs={4}>
                        <Typography>Select Subject</Typography>
                        <FormControl fullWidth size="small">
                          <Select
                            value={formData.subject}
                            onChange={handleInputChange("subject")}
                            displayEmpty
                            style={{
                              color:
                                formData.subject === "" && placeholderColor,
                            }}
                          >
                            <MenuItem value={""} disabled>
                              Select/ Type Here
                            </MenuItem>
                            {/* <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem> */}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography>Select Category</Typography>
                        <FormControl fullWidth size="small">
                          <Select
                            value={formData.subject_category}
                            onChange={handleInputChange("subject_category")}
                            displayEmpty
                            style={{
                              color: selectCategory === "" && placeholderColor,
                            }}
                          >
                            <MenuItem value={""} disabled>
                              Select/ Type Here
                            </MenuItem>
                            {/* <MenuItem value="general">General</MenuItem>
                            <MenuItem value="obc">OBC</MenuItem>
                            <MenuItem value="sc">SC</MenuItem>
                            <MenuItem value="st">ST</MenuItem> */}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography>Cutoff Percentile</Typography>

                        <TextField
                          placeholder="Type Here"
                          size="small"
                          fullWidth
                          value={formData.cutoff_percentile}
                          onChange={handleInputChange("cutoff_percentile")}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                ))}

                <Grid item container spacing={6}>
                  <Grid item xs={4}>
                    <Typography>Select Subject</Typography>
                    <FormControl fullWidth size="small">
                      <Select
                        value={formData.subject}
                        onChange={handleInputChange("subject")}
                        displayEmpty
                        style={{
                          color: formData.subject === "" && placeholderColor,
                        }}
                      >
                        <MenuItem value={""} disabled>
                          Select/ Type Here
                        </MenuItem>
                        {/* <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>Select Category</Typography>
                    <FormControl fullWidth size="small">
                      <Select
                        value={formData.subject_category}
                        onChange={handleInputChange("subject_category")}
                        displayEmpty
                        style={{
                          color: selectCategory === "" && placeholderColor,
                        }}
                      >
                        <MenuItem value={""} disabled>
                          Select/ Type Here
                        </MenuItem>
                        {/* <MenuItem value="general">General</MenuItem>
                            <MenuItem value="obc">OBC</MenuItem>
                            <MenuItem value="sc">SC</MenuItem>
                            <MenuItem value="st">ST</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>Cutoff Percentile</Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={10}>
                        <TextField
                          placeholder="Type Here"
                          size="small"
                          fullWidth
                          value={formData.cutoff_percentile}
                          onChange={handleInputChange("cutoff_percentile")}
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <Button
                          variant="outlined"
                          onClick={() =>
                            setMoreSubjectWise([...moreSubjectWise, ""])
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
          </Grid>
        ))}
        <Grid>
          <Button
            m={2}
            variant="outlined"
            color="primary"
            onClick={() => setAddMoreCutOffs([...addMoreCutOffs, ""])}
          >
            + Add More Courses
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default PreviousCutoffs;
