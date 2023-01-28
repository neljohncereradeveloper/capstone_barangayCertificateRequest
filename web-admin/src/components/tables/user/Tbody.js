import React from "react";
import { VisibilityIcon } from "../../../assets/icons";
import { useHistory } from "react-router-dom";

function Tbody({ usersData, filter }) {
  let history = useHistory();

  return (
    <>
      {usersData.filter(filter).map((user) => (
        <tr key={user.userID}>
          <td>{user.barangayID_no}</td>
          <td>{user.household_ID}</td>
          <td>{user.fullName}</td>
          <td>{user.address}</td>
          <td className="td_button">
            <button
              className="btn__view"
              onClick={() => {
                history.push(`/user/${user.userID}`);
              }}
            >
              <VisibilityIcon />
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Tbody;
