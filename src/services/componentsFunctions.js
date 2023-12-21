export function convertDateFormat(inputDateString) {
  // Split the input date string into parts using "-"
  const parts = inputDateString.split("-");

  // Ensure that the input string is in the correct format
  if (parts.length === 3) {
    // Rearrange the parts to create the new format
    const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
    return formattedDate;
  } else {
    // Return an error message or handle invalid input as needed
    return "Invalid date format";
  }
}
