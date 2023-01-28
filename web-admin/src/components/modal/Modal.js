import { useState } from "react";
import app from "../../assets/css/app.module.css";
import TextField from "./TextField";
import ProgressBar from "./ProgressBar";
import { connect } from "react-redux";
import { setModalAction } from "../../redux";
import { Offline, Online } from "react-detect-offline";

const Modal = (props) => {
  const { barangayimages } = props;
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [role, setRole] = useState(null);
  const types = ["image/png", "image/jpeg"];
  const [imageId, setImageId] = useState(null);
  console.log("file", file);
  console.log("role", role);

  // handle change
  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setRole(null);
      setError("Please select an image file ( png or jpeg ) ");
    }
  };
  // Handle clicks
  const uploadBarangayImage = () => {
    setRole("Barangay Image");
    barangayimages.map((image) => {
      if (image.rolee === "Barangay Image") {
        return setImageId(image.id);
      } else return null;
    });
  };
  const uploadPunongBarangayImage = () => {
    setRole("Punong Barangay");
    barangayimages.map((image) => {
      if (image.rolee === "Punong Barangay") {
        return setImageId(image.id);
      } else return null;
    });
  };
  const uploadBarangayTreasurerImage = () => {
    setRole("Barangay Treasurer");
    barangayimages.map((image) => {
      if (image.rolee === "Barangay Treasurer") {
        return setImageId(image.id);
      } else return null;
    });
  };
  const uploadBarangaySecretaryImage = () => {
    setRole("Barangay Secretary");
    barangayimages.map((image) => {
      if (image.rolee === "Barangay Secretary") {
        return setImageId(image.id);
      } else return null;
    });
  };

  const uploadSkChairmanImage = () => {
    setRole("SkChairman");
    barangayimages.map((image) => {
      if (image.rolee === "SkChairman") {
        return setImageId(image.id);
      } else return null;
    });
  };

  const uploadKagawadOneImage = () => {
    setRole("Kagawad 1");
    barangayimages.map((image) => {
      if (image.rolee === "Kagawad 1") {
        return setImageId(image.id);
      } else return null;
    });
  };
  const uploadKagawadTwoImage = () => {
    setRole("Kagawad 2");
    barangayimages.map((image) => {
      if (image.rolee === "Kagawad 2") {
        return setImageId(image.id);
      } else return null;
    });
  };
  const uploadKagawadThreeImage = () => {
    setRole("Kagawad 3");
    barangayimages.map((image) => {
      if (image.rolee === "Kagawad 3") {
        return setImageId(image.id);
      } else return null;
    });
  };
  const uploadKagawadFourImage = () => {
    setRole("Kagawad 4");
    barangayimages.map((image) => {
      if (image.rolee === "Kagawad 4") {
        return setImageId(image.id);
      } else return null;
    });
  };
  const uploadKagawadFiveImage = () => {
    setRole("Kagawad 5");
    barangayimages.map((image) => {
      if (image.rolee === "Kagawad 5") {
        return setImageId(image.id);
      } else return null;
    });
  };
  const uploadKagawadSixImage = () => {
    setRole("Kagawad 6");
    barangayimages.map((image) => {
      if (image.rolee === "Kagawad 6") {
        return setImageId(image.id);
      } else return null;
    });
  };
  const uploadKagawadSevenImage = () => {
    setRole("Kagawad 7");
    barangayimages.map((image) => {
      if (image.rolee === "Kagawad 7") {
        return setImageId(image.id);
      } else return null;
    });
  };
  // handle click
  const handleClick = (e) => {
    if (e.target.classList.contains(app.modal_container)) {
      props.setModalAction(false);
    }
  };

  return (
    <>
      <div className={app.modal_container} onClick={handleClick}>
        <div className={app.image_container}>
          <div className={app.image_container_top}>
            <p className={app.title}>Upload Images</p>
            {file && role && (
              <ProgressBar
                file={file}
                setFile={setFile}
                role={role}
                setRole={setRole}
                id={imageId}
              />
            )}
          </div>
          {/* <Offline>
            <div className={app.offline}>
              You're offline right now. To upload images, internet connection
              needed.
            </div>
          </Offline> */}
          {/* <Online> */}
          {/* Barangay Image */}
          <TextField
            label="Barangay Image"
            name="barangayimage"
            handleChange={handleChange}
            onClick={uploadBarangayImage}
          />
          {/* Punong Barangay */}
          <TextField
            label="Punong Barangay"
            name="punongbarangay"
            handleChange={handleChange}
            onClick={uploadPunongBarangayImage}
          />

          {/* Barangay Treasurer */}
          <TextField
            label="Barangay Treasurer"
            name="barangaytreasurer"
            handleChange={handleChange}
            onClick={uploadBarangayTreasurerImage}
          />

          {/* Barangay Secretary */}
          <TextField
            label="Barangay Secretary"
            name="barangaysecretary"
            handleChange={handleChange}
            onClick={uploadBarangaySecretaryImage}
          />
          {/* Sk Chairman */}
          <TextField
            label="SkChairman"
            name="SkChairman"
            handleChange={handleChange}
            onClick={uploadSkChairmanImage}
          />
          {/* Barangay kagawads */}
          <TextField
            label="Kagawad 1"
            name="kagawadone"
            handleChange={handleChange}
            onClick={uploadKagawadOneImage}
          />
          <TextField
            label="Kagawad 2"
            name="kagawadtwo"
            handleChange={handleChange}
            onClick={uploadKagawadTwoImage}
          />

          <TextField
            label="Kagawad 3"
            name="kagawadthree"
            handleChange={handleChange}
            onClick={uploadKagawadThreeImage}
          />
          <TextField
            label="Kagawad 4"
            name="kagawadfour"
            handleChange={handleChange}
            onClick={uploadKagawadFourImage}
          />
          <TextField
            label="Kagawad 5"
            name="kagawadfive"
            handleChange={handleChange}
            onClick={uploadKagawadFiveImage}
          />
          <TextField
            label="Kagawad 6"
            name="kagawadsix"
            handleChange={handleChange}
            onClick={uploadKagawadSixImage}
          />
          <TextField
            label="Kagawad 7"
            name="kagawadseven"
            handleChange={handleChange}
            onClick={uploadKagawadSevenImage}
          />
          {/* </Online> */}
        </div>
      </div>
    </>
  );
};

// redux setup
const mapStateToProps = (state) => {
  return {
    barangayimages: state.user.barangayimages,
  };
};
// dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    setModalAction: (modal) => dispatch(setModalAction(modal)),
  };
};

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
