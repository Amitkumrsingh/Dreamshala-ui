import React, { useState } from "react";

import { Button, Grid, TextField, Container, Typography } from "@mui/material";

const CheckList = () => {
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
        <Grid mb={4}>
          <Typography variant="h5">CHECKLIST</Typography>
        </Grid>

        <Grid>
          <Typography>
            Select all the facilities avaible in your coaching class
          </Typography>
        </Grid>

        <Grid container spacing={2}>
          {facilities.map((data, index) => (
            <Grid item xs={12} sm={12 / 8} md={12 / 8} key={index}>
              <Button
                variant={data.selected ? "contained" : "outlined"}
                onClick={() => handleFacilitiesUpdate(index)}
                fullWidth
              >
                {data.text}
              </Button>
            </Grid>
          ))}
        </Grid>

        <Grid>
          <Grid mb={2} mt={4}>
            <Typography>How many students do you have in a batch?</Typography>
          </Grid>
          <Grid container spacing={2}>
            <Grid xs={8} item>
              <Grid container spacing={2}>
                {numberOfStudents.map((data, index) => (
                  <Grid item xs={12} sm={12 / 5} md={12 / 5} key={index}>
                    <Button
                      key={index}
                      variant={data.selected ? "contained" : "outlined"}
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

        <Grid>
          <Grid mb={2} mt={4}>
            <Typography>Total Number of students in your coaching</Typography>
          </Grid>
          <Grid container spacing={2}>
            <Grid xs={8} item>
              <Grid container spacing={2}>
                {totalNumberOfStudents.map((data, index) => (
                  <Grid item xs={12} sm={12 / 5} md={12 / 5} key={index}>
                    <Button
                      key={index}
                      variant={data.selected ? "contained" : "outlined"}
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

        <Grid>
          <Grid mb={2} mt={4}>
            <Typography>
              Total number of faculities associated with your coaching
            </Typography>
          </Grid>
          <Grid container spacing={2}>
            <Grid xs={8} item>
              <Grid container spacing={2}>
                {numberOfFaculties.map((data, index) => (
                  <Grid item xs={12} sm={12 / 5} md={12 / 5} key={index}>
                    <Button
                      key={index}
                      variant={data.selected ? "contained" : "outlined"}
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
      </Container>
    </>
  );
};

export default CheckList;
