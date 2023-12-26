import {
  About,
  ContactDetails,
  ManagementContact,
  CoursesAndFees,
  EntranceExams,
  Faculties,
  Reviews,
  Videos,
  Location,
  CollegeDetails,
  CheckList,
  FAQ,
  Photos,
  ImportantNews,
  ImportantDates,
  DetailedApplicationProcessAndEligibilityCriteria,
  Alumni,
  PreviousCutoffs,
  PlacementDetails,
} from "../../../components/College/add-new-college";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import DashboardLayout from "../../../layouts/Dashboard";
import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Alert,
  Collapse,
  AlertTitle,
  Typography,
} from "@mui/material";
import { addNewCollegeForms } from "../../../services/collegeServices";

const steps = [
  "Basic Details",
  "Important Updates",
  "Courses Offered and its Details",
  "People",
  "Additional Details",
];

const AddNewCollege = () => {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [location, setLocation] = useState();
  const [about, setAbout] = useState();
  const [contactDetails, setContactDetails] = useState();
  const [collegeDetails, setCollegeDetails] = useState();
  const [managementContact, setManagementContact] = useState();
  const [importantNews, setImportantNews] = useState();
  const [importantDates, setImportantDates] = useState();
  const [entranceExams, setEntranceExams] = useState();
  const [coursesAndFees, setCoursesAndFees] = useState();
  const [
    detailedApplicationProcessAndEligibilityCriteria,
    setDetailedApplicationProcessAndEligibilityCriteria,
  ] = useState();
  const [previousCutoffs, setPreviousCutoffs] = useState();
  const [alumni, setAlumni] = useState();
  const [faculties, setFaculties] = useState();
  const [placementDetails, setPlacementDetails] = useState();
  const [photos, setPhotos] = useState();
  const [videos, setVideos] = useState();
  const [reviews, setReviews] = useState();
  const [checkList, setCheckList] = useState();
  const [faq, setFaq] = useState();
  const [error, setError] = useState({
    fields: {},
    err: false,
  });

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/sign-in");
    }
  }, [router, isLoggedIn]);

  const [activeStep, setActiveStep] = useState(0);

  console.log(`College step ${activeStep + 1}`);

  const handleNext = async () => {
    let response, obj;

    switch (activeStep) {
      case 0:
        response = await addNewCollegeForms({
          data: {
            ...about,
            ...contactDetails,
            ...collegeDetails,
            ...location,
            ...managementContact,
          },
          urlEndpoint: "/college/step1/",
        });

        break;

      case 1:
        response = await addNewCollegeForms({
          data: {
            ...importantNews,
            ...importantDates,
          },
          urlEndpoint: "/college/step2/",
        });

        break;

      case 2:
        response = await addNewCollegeForms({
          data: {
            ...entranceExams,
            ...coursesAndFees,
            ...detailedApplicationProcessAndEligibilityCriteria,
            ...previousCutoffs,
          },
          urlEndpoint: "/college/step3/",
        });

        break;

      case 3:
        response = await addNewCollegeForms({
          data: {
            ...alumni,
            ...faculties,
          },
          urlEndpoint: "/college/step4/",
        });

        break;

      case 4:
        response = await addNewCollegeForms({
          data: {
            ...placementDetails,
            ...photos,
            ...videos,
            ...reviews,
            ...checkList,
            ...faq,
          },
          urlEndpoint: "/college/step5/",
        });

        break;
    }

    obj = await response.json();

    if (response.status !== 201) {
      setError({ fields: obj, err: true });
    } else {
      setError({ fields: {}, err: false });
      setActiveStep(activeStep + 1);
    }
    console.log(obj);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleToStep = (step) => {
    setActiveStep(step);
    setError({ fields: {}, err: false });
  };

  return (
    <Container>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        style={{ marginBottom: "20px" }}
      >
        {steps.map((label, index) => (
          <Step key={index} onClick={() => handleToStep(index)}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid>
        {activeStep === steps.length ? (
          <Grid>
            <p>All steps completed - you're finished</p>
          </Grid>
        ) : (
          <Grid
            container
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Grid>
              {/* Render the current step form */}

              {activeStep === 0 && (
                <Grid container flexDirection={"column"} spacing={6}>
                  <Grid item>
                    <About setAbout={setAbout} />
                  </Grid>
                  <Grid item mt={6}>
                    <ContactDetails setContactDetails={setContactDetails} />
                  </Grid>
                  <Grid item mt={6}>
                    <CollegeDetails setCollegeDetails={setCollegeDetails} />
                  </Grid>
                  <Grid item mt={6}>
                    <Location setLocation={setLocation} />
                  </Grid>
                  <Grid item mt={6}>
                    <ManagementContact
                      setManagementContact={setManagementContact}
                    />
                  </Grid>
                </Grid>
              )}
              {activeStep === 1 && (
                <Grid container flexDirection={"column"} spacing={6}>
                  <Grid item>
                    <ImportantNews setImportantNews={setImportantNews} />
                  </Grid>
                  <Grid item mt={6}>
                    <ImportantDates setImportantDates={setImportantDates} />
                  </Grid>
                </Grid>
              )}

              {activeStep === 2 && (
                <Grid container flexDirection={"column"} spacing={6}>
                  <Grid item>
                    <EntranceExams setEntranceExams={setEntranceExams} />
                  </Grid>
                  <Grid item mt={6}>
                    <CoursesAndFees setCoursesAndFees={setCoursesAndFees} />
                  </Grid>
                  <Grid item mt={6}>
                    <DetailedApplicationProcessAndEligibilityCriteria
                      setDetailedApplicationProcessAndEligibilityCriteria={
                        setDetailedApplicationProcessAndEligibilityCriteria
                      }
                    />
                  </Grid>
                  <Grid item mt={6}>
                    <PreviousCutoffs setPreviousCutoffs={setPreviousCutoffs} />
                  </Grid>
                </Grid>
              )}
              {activeStep === 3 && (
                <Grid container flexDirection={"column"} spacing={6}>
                  <Grid item>
                    <Alumni setAlumni={setAlumni} />
                  </Grid>
                  <Grid item mt={6}>
                    <Faculties setFaculties={setFaculties} />
                  </Grid>
                  <Grid item mt={6}></Grid>
                </Grid>
              )}
              {activeStep === 4 && (
                <Grid container flexDirection={"column"} spacing={6}>
                  <Grid item>
                    <PlacementDetails
                      setPlacementDetails={setPlacementDetails}
                    />
                  </Grid>
                  <Grid item mt={6}>
                    <Photos setPhotos={setPhotos} />
                  </Grid>
                  <Grid item mt={6}>
                    <Videos setVideos={setVideos} parentName="college" />
                  </Grid>
                  <Grid item mt={6}>
                    <Reviews setReviews={setReviews} />
                  </Grid>
                  <Grid item mt={6}>
                    <CheckList setCheckList={setCheckList} />
                  </Grid>
                  <Grid item mt={6}>
                    <FAQ setFaq={setFaq} />
                  </Grid>
                </Grid>
              )}
              {/* Add more steps as needed */}
            </Grid>

            <Grid mb={4} mt={8}>
              <Collapse in={error.err}>
                <Alert
                  mb={4}
                  variant="filled"
                  severity="warning"
                  onClose={() => setError({ fields: "", err: false })}
                >
                  <AlertTitle>Required Fields</AlertTitle>
                  {Object.keys(error.fields).map((field) => (
                    <Typography key={field}>
                      {field}
                      {/* {field}: {error.fields[field][0]} */}
                    </Typography>
                  ))}
                </Alert>
              </Collapse>
            </Grid>
            <Grid container justifyContent={"end"} mt={20}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

AddNewCollege.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AddNewCollege;
