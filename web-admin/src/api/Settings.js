import Axios from "axios";

//INSERT USER
export const updateSettings = async ({ status, barangayID_no }) => {
  const res = await Axios.put("http://localhost:3001/api/settings/update", {
    status,
    barangayID_no,
  });
  return res;
};
//update barangay name
export const updateBarangayName = async ({ barangayname }) => {
  const res = await Axios.put(
    "http://localhost:3001/api/settings/barangayinfo",
    {
      barangayname,
    }
  );
  return res;
};
//update image
export const updateImage = async ({ data }) => {
  const res = await Axios.put(
    "http://localhost:3001/api/settings/image",
    {
      data,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res;
};
//FETCH SETTINGS
export const fetchSettings = async () => {
  const data = await Axios.get("http://localhost:3001/api/settings/retrieve");
  return data.data;
};
