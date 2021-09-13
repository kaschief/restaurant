import React from "react";

interface ReservationCardTypes {
  name: string;
}

export const ReservationCard = ({
  name,
}: ReservationCardTypes): JSX.Element => {
  return <div className="reservation-card-container">{name}</div>;
};

export default ReservationCard;
