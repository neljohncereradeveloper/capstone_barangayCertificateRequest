import Card from "./officials/Card";

function Officials({ docs }) {
  return (
    <>
      {docs?.map((img) => {
        if (img.rolee === "Barangay Image") return null;
        if (img.rolee === "Punong Barangay")
          return (
            <Card
              key={img.id}
              image={img.url}
              role="Punong Barangay"
              name="Carmelita M. Babao"
            />
          );
        if (img.rolee === "Barangay Treasurer")
          return (
            <Card
              key={img.id}
              image={img.url}
              role="Barangay Treasurer"
              name="Danilo O Omad"
            />
          );
        if (img.rolee === "Barangay Secretary")
          return (
            <Card
              key={img.id}
              image={img.url}
              role="Barangay Secretary"
              name="Syril L. Nomus"
            />
          );
        if (img.rolee === "SkChairman")
          return (
            <Card
              key={img.id}
              image={img.url}
              role="SkChairman"
              name="Angelou A. Nisnisan"
            />
          );

        if (img.rolee === "Kagawad 1")
          return (
            <Card
              key={img.id}
              image={img.url}
              role="Kagawad"
              name="Ruel L. Betonio"
            />
          );
        if (img.rolee === "Kagawad 2")
          return (
            <Card
              key={img.id}
              image={img.url}
              role="Kagawad"
              name="Elsie B. Amad"
            />
          );

        if (img.rolee === "Kagawad 3")
          return (
            <Card
              key={img.id}
              image={img.url}
              role="Kagawad"
              name="Candido P. Borja Jr."
            />
          );
        if (img.rolee === "Kagawad 4")
          return (
            <Card
              key={img.id}
              image={img.url}
              role="Kagawad"
              name="Efren R. Pamolino"
            />
          );
        if (img.rolee === "Kagawad 5")
          return (
            <Card
              key={img.id}
              image={img.url}
              role="Kagawad"
              name="Angelo C. Gerondio"
            />
          );
        if (img.rolee === "Kagawad 6")
          return (
            <Card
              key={img.id}
              image={img.url}
              role="Kagawad"
              name="Arvin L. Genabe"
            />
          );
        if (img.rolee === "Kagawad 7")
          return (
            <Card
              key={img.id}
              image={img.url}
              role="Kagawad"
              name="Bernadette G. Al-ag"
            />
          );
        return null;
      })}
    </>
  );
}

export default Officials;
