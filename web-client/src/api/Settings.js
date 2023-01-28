import Axios from "axios";

//FETCH SETTINGS
export const fetchSettings = async () => {
  const data = await Axios.get("http://localhost:3001/api/settings/retrieve");
  return data.data;
};
