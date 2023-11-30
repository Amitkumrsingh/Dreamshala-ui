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

import DashboardLayout from "../../../layouts/Dashboard";
import React from "react";
import {
  Button,
  Container,
  Stepper,
  Step,
  StepLabel,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  nextStep,
  preStep,
  toStep,
} from "../../../redux/slices/add-new-college-step-form";

const steps = [
  "About",
  "Contact Details",
  "Management Contact",
  "Entrance Exams",
  "Courses and Fees",
  "Photos",
  "Important News",
  "Important Dates",
  "Detailed application process and eligibility criteria",
  "Faculties",
];
const steps1 = [
  "Reviews",
  "Videos",
  "Alumni",
  "Previous cutoffs",
  "Placement Details",
  "Location",
  "College Details",
  "Checklist",
  "Frequently Asked Questions",
]; // Add more steps as needed

const AddNewCollege = () => {
  const dispatch = useDispatch();
  const activeStep = useSelector((state) => state.activeStep);

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handleBack = () => {
    dispatch(preStep());
  };

  const handleToStep = (step) => {
    dispatch(toStep(step));
  };

  return (
    <Container>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        style={{ marginBottom: "20px" }}
      >
        {activeStep < 10 &&
          steps.map((label, index) => (
            <Step key={index} onClick={() => handleToStep(index)}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}

        {activeStep >= 10 &&
          steps1.map((label, index) => (
            <Step
              key={index + 10}
              onClick={() => handleToStep(index + 10)}
              index={index + 10}
            >
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
      </Stepper>
      <div>
        {activeStep === steps.length + steps1.length ? (
          <div>
            <p>All steps completed - you're finished</p>
          </div>
        ) : (
          <div>
            {/* Render the current step form */}
            {activeStep === 0 && <About />}
            {activeStep === 1 && <ContactDetails />}
            {activeStep === 2 && <ManagementContact />}
            {activeStep === 3 && <EntranceExams />}
            {activeStep === 4 && <CoursesAndFees />}
            {activeStep === 5 && <Photos />}
            {activeStep === 6 && <ImportantNews />}
            {activeStep === 7 && <ImportantDates />}
            {activeStep === 8 && (
              <DetailedApplicationProcessAndEligibilityCriteria />
            )}
            {activeStep === 9 && <Faculties />}
            {activeStep === 10 && <Reviews />}
            {activeStep === 11 && <Videos parentName={"college"} />}
            {activeStep === 12 && <Alumni />}
            {activeStep === 13 && <PreviousCutoffs />}
            {activeStep === 14 && <PlacementDetails />}
            {activeStep === 15 && <Location />}
            {activeStep === 16 && <CollegeDetails />}
            {activeStep === 17 && <CheckList />}
            {activeStep === 18 && <FAQ />}
            {/* Add more steps as needed */}
            <Grid mt={6}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length + steps1.length - 1
                  ? "Finish"
                  : "Next"}
              </Button>
            </Grid>
          </div>
        )}
      </div>
    </Container>
  );
};

// const ImportantNews = () => <div>ImportantNews Content</div>;
// const ImportantDates = () => <div>ImportantDates Content</div>;
// const DetailedApplicationProcessAndEligibilityCriteria = () => (
//   <div>DetailedApplicationProcessAndEligibilityCriteria Content</div>
// );
// const Alumni = () => <div>Alumni Content</div>;
// const PreviousCutoffs = () => <div>PreviousCutoffs Content</div>;
// const PlacementDetails = () => <div>PlacementDetails Content</div>;

AddNewCollege.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AddNewCollege;
