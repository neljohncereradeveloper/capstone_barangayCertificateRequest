import React from "react";
import card from "../../assets/css/records/card.module.css";

function Card({
  date,
  time,
  certificate,
  purpose,
  payment,
  status,
  ifDisapprove,
}) {
  return (
    <div className={card.container}>
      Date <p className={`${card.para}${card.date}`}>{date}</p>
      Time <p className={card.para}>{time}</p>
      Certificate <p className={card.para}>{certificate}</p>
      Purpose <p className={card.para}>{purpose}</p>
      Payment <p className={card.para}>{payment}</p>
      Status
      <p
        className={`
           ${card.para}
            ${
              status === "Pending"
                ? card.pending
                : status === "Approve"
                ? card.approve
                : status === "Disapprove"
                ? card.disapprove
                : null
            }
            `}
      >
        {status}
      </p>
      {ifDisapprove === null ? null : (
        <>
          Disapprove Reason
          <p className={`${card.para} ${card.disapprovereason}`}>
            {ifDisapprove}
          </p>
        </>
      )}
    </div>
  );
}

export default Card;
