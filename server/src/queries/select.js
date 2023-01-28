//User
const select_user_username =
  "SELECT l.userID, l.username , l.p_assword " +
  "FROM tbllogin AS l, tblusers AS u " +
  "WHERE l.userID = u.userID AND l.userName = ? AND u.isActive = 1";
const select_user_account = "Select userName from tbllogin where userID=?";
//request
const request_retrieve_pending =
  "SELECT COUNT(*) AS Pendings FROM tblrequest WHERE userID = ? AND statusID = '1'";

//request
const request_retrieve_pending_dates =
  "SELECT r_date FROM tblrequest WHERE userID = ? AND statusID = '1'";

const request_retrieve_pending_all =
  "SELECT COUNT(*) AS Pendings FROM tblrequest WHERE statusID = '1'";
const request_retrieve_all =
  "Select " +
  "requestID,r.r_date,r.r_time,u.barangayID_no, " +
  "u.fullName,c.certificateName,r.purpose,p.`payment`,s.status " +
  "FROM tblrequest AS r, tblstatus AS s, tblusers AS u, tblcertificates AS c, tblpayment AS p  " +
  "WHERE r.userID = u.userID AND r.certificateID = c.certificateID AND r.`paymentid` = p.`paymentid` AND r.statusID = s.statusID ";
// const request_retrieve_byStatus =
//   "SELECT r.requestID,r.r_date, r.r_time,u.barangayID_no,u.fullName,c.certificateName,r.purpose,s.status " +
//   "FROM tblrequest AS r , tblusers AS u, tblcertificates AS c, tblstatus AS s " +
//   "WHERE r.userID = u.UserID AND r.certificateID = C.certificateID " +
//   "AND r.statusID = s.statusID AND STATUS = ?";
const request__all = "Select * from tblrequest";

module.exports = {
  select_user_username,
  select_user_account,
  request_retrieve_pending,
  request_retrieve_pending_all,
  request_retrieve_all,
  request__all,
  request_retrieve_pending_dates,
};
