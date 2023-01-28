import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../styledComponents/header";
import Footer from "../../styledComponents/footer";
import { useLocation } from "react-router-dom";
import ProfileEdit from "../form/profile/ProfileEdit";
import { useMutation } from "react-query";
import { editUser } from "../../api/User";
import editprofile from "../../assets/css/account/editprofile.module.css";

function EditProfile() {
  let history = useHistory();
  const { state } = useLocation();
  const [editSuccess, setEditSuccess] = React.useState(false);
  //USEMUTATION
  const mutation = useMutation(editUser, {
    onSuccess: () => {
      setEditSuccess(true);
      history.push({
        pathname: "/account",
        state: {
          registerSuccessfull: true,
        },
      });
    },
  });
  const handleSubmit = async (values) => {
    try {
      await mutation.mutateAsync({
        id: state.data.userID,
        body: values,
      });
    } catch (e) {}
  };
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        {editSuccess ? (
          <div className={editprofile.editSuccess}>Edit Successfull</div>
        ) : null}
        <ProfileEdit handleSubmit={handleSubmit} data={state} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default EditProfile;
