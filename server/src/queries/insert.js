//REQUEST
const request_insert =
  "INSERT INTO tblrequest ( userID, certificateID, paymentid, purpose, statusID, r_date, r_time, r_expiration ) " +
  "VALUES ( ? , ( SELECT certificateID FROM tblcertificates WHERE certificateName = ? ), " +
  "( SELECT paymentid FROM tblpayment WHERE payment = ? ), ? , " +
  "( SELECT statusID FROM tblstatus WHERE STATUS = ? ), NOW(), NOW(), (SELECT DATE_ADD(NOW(), INTERVAL 7 DAY )))";

module.exports = {
  request_insert,
};
