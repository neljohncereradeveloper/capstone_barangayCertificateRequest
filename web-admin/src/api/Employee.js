import Axios from "axios";
//FETCH ALL Employees
export const fetchAllEmployees = async () => {
  const data = await Axios.get("http://localhost:3001/api/employee/view");
  return data.data;
};
//FETCH one Employee
export const fetchEmployee = async ({ queryKey }) => {
  const [, { id }] = queryKey;
  const data = await Axios.get(`http://localhost:3001/api/employee/${id}`);
  return data.data;
};

//INSERT USER
export const InsertEmployee = async ({ state }) => {
  const res = await Axios.post(
    "http://localhost:3001/api/employee/create",
    {
      idnumber: state.idnumber,
      fullname: state.fullname,
      contact: state.contact,
      address: state.address,
      username: state.username,
      p_assword: state.p_assword,
    },
    {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    }
  );
  return res;
};
