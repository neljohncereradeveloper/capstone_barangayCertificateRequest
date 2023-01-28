import * as Yup from "yup";

//USER REGISTRATION VALIDATION
export const validate_userRegistration = Yup.object({
  barangayID_no: Yup.string().required("Barangay ID no. Required"),
  houseHoldID_no: Yup.string().required("Househol ID no Required"),
  houseHold_role: Yup.string()
    .oneOf(["Member", "Head"], "Invalid Role")
    .required("Role Required"),
  fullName: Yup.string().required("Fullname Required"),
  age: Yup.number().required("Age Required").positive().integer(),
  gender: Yup.string()
    .oneOf(["Male", "Female"], "Invalid Gender")
    .required("Gender Required"),
  birthDate: Yup.date().required("Please select birthdate"),
  birthPlace: Yup.string().required("Birthtplace Required"),
  civilStatus: Yup.string()
    .oneOf(
      ["Married", "Widowed", "Separated", "Divorce", "Single"],
      "Invalid Gender"
    )
    .required("Status Required"),
  address: Yup.string().required("Address Required"),
  userName: Yup.string().required("Username Required"),
  password: Yup.string().required("Password is Required"),
});

export const validate_report_dates = Yup.object({
  fromDate: Yup.date().required("Please select date"),
  toDate: Yup.date()
    .min(Yup.ref("fromDate"), "End date should be greater than from date")
    .required("date required")
    .nullable(),
});

//EMPLOYEE REGISTRATION VALIDATION
export const validate_employeeRegistration = Yup.object({
  idnumber: Yup.string().required("ID Number Required"),
  fullname: Yup.string().required("Fullname Required"),
  contact: Yup.string().required("Contact Required"),
  address: Yup.string().required("Address Required"),
  username: Yup.string().required("Username Required"),
  p_assword: Yup.string().required("Password is Required"),
});
