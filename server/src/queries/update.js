const update_user =
  "UPDATE tblusers SET barangayID_no=?, houseHoldID_no=?, fullName=?, age=?, gender=? ,birthPlace=?, " +
  "civiStatus=?,address=?  WHERE userID=?";

const update_user_houshold =
  "UPDATE tblhousehold " +
  "SET household_ID = ? " +
  "WHERE hhid = (SELECT hhid FROM tblusers WHERE barangayID_no=?)";

const update_request_status =
  "UPDATE tblrequest SET " +
  "statusID = ( SELECT statusID FROM tblstatus WHERE STATUS= ?) " +
  "WHERE requestID = ?";

module.exports = {
  update_user,
  update_request_status,
};
