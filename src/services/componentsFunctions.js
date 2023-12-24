const UrlPatternRegex =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const ContactPatterRegex =
  /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const GSTINpatterRegex = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/;
const PincodePatterRegex = /^[1-9][0-9]{5}$/;
const PancardPatterRegex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

export const checkUrl = (url) => UrlPatternRegex.test(url);
export const checkContact = (contact) => ContactPatterRegex.test(contact);
export const checkGSTIN = (gstin) => GSTINpatterRegex.test(gstin);
export const checkPincode = (pincode) => PincodePatterRegex.test(pincode);
export const checkPancard = (pancard) => PancardPatterRegex.test(pancard);

export const checkEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Generating years from - to
// for generating years
export const generateYearsArray = (from, to) => {
  const years = [];

  for (let year = from; year <= to; year++) {
    years.push(year.toString());
  }

  return years;
};
