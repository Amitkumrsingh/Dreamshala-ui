import About from "./About";
import ContactDetails from "./ContactDetails";
import ManagementContact from "./ManagementContact";
import CoursesAndFees from "./CoursesAndFees";
import EntranceExams from "./EntranceExams";
import DashboardLayout from "../../../layouts/Dashboard";
import React from "react";
import { Button, Container, Stepper, Step, StepLabel } from "@mui/material";
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
      <Stepper activeStep={activeStep} alternativeLabel>
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
            {activeStep === 13 && <Checklist />}
            {activeStep === 14 && <FAQ />}
            {/* Add more steps as needed */}
            <div>
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

const Photos = () => <div>Photos Content</div>;
const Results = () => <div>Results Content</div>;
const Faculties = () => <div>Faculties Content</div>;
const Reviews = () => <div>Reviews Content</div>;
const Videos = () => <div>Videos Content</div>;
const StudyMaterial = () => <div>Study Material Content</div>;
const Location = () => <div>Location Content</div>;
const CompanyDetails = () => <div>Company Details Content</div>;
const Checklist = () => <div>Checklist Content</div>;
const FAQ = () => <div>Frequently Asked Questions Content</div>;

AddNewCollege.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AddNewCollege;
