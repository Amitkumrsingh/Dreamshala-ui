import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Button, Grid, TextField, Container, Typography } from "@mui/material";

const CheckList = ({ setCheckList }) => {
  const theme = useTheme();
  const secondaryColor = theme.palette.text.secondary;

  const primaryColor = theme.palette.primary.main;

  const buttonSelectedStyle = {
    // color: primaryColor,
    borderColor: primaryColor,
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

    if (preArray[index].selected) {
      setFormData({
        ...formData,
        available_facilities: `${formData.available_facilities}, ${facilities[index].text}`,
      });
    }
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

  const [formData, setFormData] = useState({
    students_in_batch: "",
    total_students: "",
    number_of_faculty: "",
    available_facilities: "",
  });

  const [students_in_batch, setStudents_in_batch] = useState({
    numbers: "",
    index: -1,
  });
  const [total_students, setTotal_students] = useState({
    numbers: "",
    index: -1,
  });
  const [number_of_faculty, setNumber_of_faculty] = useState({
    numbers: "",
    index: -1,
  });

  const handleStudentsInBatch = (text, index) => {
    if (students_in_batch.index === index) {
      setStudents_in_batch({
        numbers: "",
        index: -1,
      });
    } else {
      setStudents_in_batch({
        numbers: text,
        index: index,
      });
    }

    setFormData({ ...formData, students_in_batch: students_in_batch.numbers });
  };

  const handleTotalStudents = (text, index) => {
    if (total_students.index === index) {
      setTotal_students({
        numbers: "",
        index: -1,
      });
    } else {
      setTotal_students({
        numbers: text,
        index: index,
      });
    }
    setFormData({
      ...formData,
      total_students: total_students.numbers,
    });
  };

  const handleNumberOfFaculty = (text, index) => {
    if (number_of_faculty.index === index) {
      setNumber_of_faculty({
        numbers: "",
        index: -1,
      });
    } else {
      setNumber_of_faculty({
        numbers: text,
        index: index,
      });
    }
    setFormData({ ...formData, number_of_faculty: number_of_faculty.numbers });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      number_of_faculty: number_of_faculty.numbers,
      total_students: total_students.numbers,
      students_in_batch: students_in_batch.numbers,
    });
    setCheckList(formData);
  }, [
    setCheckList,
    formData,
    number_of_faculty.numbers,
    total_students.numbers,
    students_in_batch.numbers,
  ]);

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
                Select all the facilities avaible in your college premises
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
                        variant={
                          students_in_batch.index === index
                            ? "contained"
                            : "outlined"
                        }
                        onClick={() => handleStudentsInBatch(data.text, index)}
                        style={
                          students_in_batch.index === index
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
                  value={students_in_batch.numbers}
                  // disabled={students_in_batch.index !== -1}
                  onChange={(e) =>
                    setStudents_in_batch({ index: -1, numbers: e.target.value })
                  }
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid mb={2}>
              <Typography>Total Number of students in your college</Typography>
            </Grid>
            <Grid container spacing={4}>
              <Grid xs={8} item>
                <Grid container spacing={4}>
                  {totalNumberOfStudents.map((data, index) => (
                    <Grid item xs={12} sm={12 / 5} md={12 / 5} key={index}>
                      <Button
                        key={index}
                        variant={
                          total_students.index === index
                            ? "contained"
                            : "outlined"
                        }
                        onClick={() => handleTotalStudents(data.text, index)}
                        style={
                          total_students.index === index
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
                  value={total_students.numbers}
                  // disabled={total_students.index !== -1}
                  onChange={(e) =>
                    setTotal_students({
                      index: -1,
                      numbers: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid mb={2}>
              <Typography>
                Total number of faculities associated with your college
              </Typography>
            </Grid>
            <Grid container spacing={4}>
              <Grid xs={8} item>
                <Grid container spacing={4}>
                  {numberOfFaculties.map((data, index) => (
                    <Grid item xs={12} sm={12 / 5} md={12 / 5} key={index}>
                      <Button
                        key={index}
                        variant={
                          number_of_faculty.index === index
                            ? "contained"
                            : "outlined"
                        }
                        onClick={() => handleNumberOfFaculty(data.text, index)}
                        style={
                          number_of_faculty.index === index
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
                  value={number_of_faculty.numbers}
                  // disabled={number_of_faculty.index !== -1}
                  onChange={(e) =>
                    setNumber_of_faculty({ index: -1, numbers: e.target.value })
                  }
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
