import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Button, Grid, TextField, Container, Typography } from "@mui/material";

const CheckList = () => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;
  const primaryColor = theme.palette.text.primary;

  const buttonSelectedStyle = {
    color: primaryColor,
  };

  const buttonNotSelectedStyle = {
    color: secondaryColor,
    borderColor: secondaryColor,
  };

  const [facilities, setFacilities] = useState([
    {
      text: "Study Material",
      selected: false,
    },
    {
      text: "Mock Test",
      selected: false,
    },
    {
      text: "Hybrid Programs",
      selected: false,
    },
    {
      text: "Remote Learning",
      selected: false,
    },
    {
      text: "Counselling",
      selected: false,
    },
    {
      text: "Doubt Solving",
      selected: false,
    },
    {
      text: "Discussions",
      selected: false,
    },
    {
      text: "Weekly Tests",
      selected: false,
    },
    {
      text: "Library",
      selected: false,
    },
    {
      text: "Toilets",
      selected: false,
    },
    {
      text: "Hybrid Programs",
      selected: false,
    },
    {
      text: "Remote Learning",
      selected: false,
    },
    {
      text: "Counselling",
      selected: false,
    },
    {
      text: "Doubt Solving",
      selected: false,
    },
    {
      text: "Discussions",
      selected: false,
    },
    {
      text: "Weekly tests",
      selected: false,
    },
  ]);
  const handleFacilitiesUpdate = (index) => {
    const preArray = facilities;
    preArray[index].selected = !preArray[index].selected;
    setFacilities([...preArray]);
  };

  const numberOfStudents = [
    {
      text: "20-30",
      selected: false,
    },
    {
      text: "30-50",
      selected: false,
    },
    {
      text: "50-70",
      selected: false,
    },
    {
      text: "70-100",
      selected: false,
    },
    {
      text: "100+",
      selected: false,
    },
  ];
  const totalNumberOfStudents = [
    {
      text: "<100",
      selected: false,
    },
    {
      text: "100-250",
      selected: false,
    },
    {
      text: "250-500",
      selected: false,
    },
    {
      text: "500-1000",
      selected: false,
    },
    {
      text: "1000+",
      selected: false,
    },
  ];

  const numberOfFaculties = [
    {
      text: "<5",
      selected: false,
    },

    {
      text: "5-10",
      selected: false,
    },

    {
      text: "10-25",
      selected: false,
    },

    {
      text: "25-100",
      selected: false,
    },

    {
      text: "100+",
      selected: false,
    },
  ];

  return (
    <>
      <Container>
        <Grid mb={6}>
          <Typography
            variant="h5"
            gutterBottom
            borderLeft={"4px solid " + theme.palette.primary.main}
            padding={1}
          >
            <em>
              <strong>CHECKLIST </strong>
            </em>
          </Typography>
          {/* <Typography variant="h5">CHECKLIST</Typography> */}
        </Grid>

        <Grid container flexDirection={"column"} spacing={4}>
          <Grid item mt={1}>
            <Grid mb={2}>
              <Typography>
                Select all the facilities avaible in your coaching class
              </Typography>
            </Grid>

            <Grid container spacing={4}>
              {facilities.map((data, index) => (
                <Grid item xs={12} sm={12 / 8} md={12 / 8} key={index}>
                  <Button
                    variant={data.selected ? "contained" : "outlined"}
                    onClick={() => handleFacilitiesUpdate(index)}
                    style={
                      data.selected
                        ? buttonSelectedStyle
                        : buttonNotSelectedStyle
                    }
                    fullWidth
                  >
                    {data.text}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item mt={4}>
            <Grid mb={2}>
              <Typography>How many students do you have in a batch?</Typography>
            </Grid>
            <Grid container spacing={4}>
              <Grid xs={8} item>
                <Grid container spacing={4}>
                  {numberOfStudents.map((data, index) => (
                    <Grid item xs={12} sm={12 / 5} md={12 / 5} key={index}>
                      <Button
                        key={index}
                        variant={data.selected ? "contained" : "outlined"}
                        style={
                          data.selected
                            ? buttonSelectedStyle
                            : buttonNotSelectedStyle
                        }
                        fullWidth
                      >
                        {data.text}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid xs={4} item>
                <TextField
                  fullWidth
                  placeholder="Type Here"
                  type="text"
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid mb={2}>
              <Typography>Total Number of students in your coaching</Typography>
            </Grid>
            <Grid container spacing={4}>
              <Grid xs={8} item>
                <Grid container spacing={4}>
                  {totalNumberOfStudents.map((data, index) => (
                    <Grid item xs={12} sm={12 / 5} md={12 / 5} key={index}>
                      <Button
                        key={index}
                        variant={data.selected ? "contained" : "outlined"}
                        style={
                          data.selected
                            ? buttonSelectedStyle
                            : buttonNotSelectedStyle
                        }
                        fullWidth
                      >
                        {data.text}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid xs={4} item>
                <TextField
                  fullWidth
                  placeholder="Type Here"
                  type="text"
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid mb={2}>
              <Typography>
                Total number of faculities associated with your coaching
              </Typography>
            </Grid>
            <Grid container spacing={4}>
              <Grid xs={8} item>
                <Grid container spacing={4}>
                  {numberOfFaculties.map((data, index) => (
                    <Grid item xs={12} sm={12 / 5} md={12 / 5} key={index}>
                      <Button
                        key={index}
                        variant={data.selected ? "contained" : "outlined"}
                        style={
                          data.selected
                            ? buttonSelectedStyle
                            : buttonNotSelectedStyle
                        }
                        fullWidth
                      >
                        {data.text}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid xs={4} item>
                <TextField
                  fullWidth
                  placeholder="Type Here"
                  type="text"
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CheckList;
