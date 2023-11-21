import {
  About,
  ContactDetails,
  ManagementContact,
  CoursesAndFees,
  EntranceExams,
  Faculties,
  Reviews,
  Videos,
  StudyMaterial,
  Location,
  CompanyDetails,
  CheckList,
  FAQ,
  Results,
  Photos,
} from "../../../components/College/add-new-college";

import DashboardLayout from "../../../layouts/Dashboard";
import React, { useState } from "react";
import { Button, Container, Stepper, Step, StepLabel } from "@mui/material";

const steps = [
  "About",
  "Contact Details",
  "Management Contact",
  "Exams",
  "Courses and Fees",
  "Photos",
  "Results",
  "Faculties",
  "Reviews",
  "Videos",
  "Study Material",
  "Location",
  "Company Details",
  "Checklist",
  "Frequently Asked Questions",
]; // Add more steps as needed

const AddNewCollege = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleToStep = (step) => {
    setActiveStep(step);
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
      <div>
        {activeStep === steps.length ? (
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
            {activeStep === 6 && <Results />}
            {activeStep === 7 && <Faculties />}
            {activeStep === 8 && <Reviews />}
            {activeStep === 9 && <Videos />}
            {activeStep === 10 && <StudyMaterial />}
            {activeStep === 11 && <Location />}
            {activeStep === 12 && <CompanyDetails />}
            {activeStep === 13 && <CheckList />}
            {activeStep === 14 && <FAQ />}
            {/* Add more steps as needed */}
            <div style={{ marginTop: "10px" }}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

AddNewCollege.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AddNewCollege;
