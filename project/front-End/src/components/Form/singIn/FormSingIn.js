import { React } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { authenticate, isAuth } from "../../../helper/auth";
import axios from "axios";
import "./FormSingIn.css";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const FormSingIn = (props) => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/singIn",
        data
      );

      if (response.data.auth) {
        authenticate(response, () => {
          if (isAuth()) {
            setTimeout(() => {
              toast.success("Sing-in success");
              props.setLogin(isAuth());
              history.push(response.data.red);
            }, 1000);
          }
        });
      } else {
        setTimeout(() => {
          toast.warn("filed to sing ip please try again");
        }, 1000);
      }
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <div className="container-form-singin">
      <ToastContainer />
      <div className="container-container-form-singin">
        <div className="container-container-form-left-singin">
          <form className="form_form-singin" onSubmit={handleSubmit(onSubmit)}>
            <div className="contaner_user-name spice-singin">
              <label htmlFor="user" className="label-singin">
                User name
              </label>
              <input
                type="text"
                name="username"
                id="user-name"
                className="input_user-name"
                placeholder="name"
                ref={register}
                required
              />
            </div>

            <div className="contaner_email spice-singin">
              <label htmlFor="email" className="label-singin">
                email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="input_email"
                ref={register}
                required
              />
            </div>

            <div className="contaner_password spice-singin">
              <label htmlFor="password" className="label-singin">
                password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="input_password"
                ref={register}
                required
              />
            </div>

            <div className="contaner_button spice-singin">
              <button type="submit" className="submit">
                sing in
              </button>
            </div>
          </form>
        </div>
        <div className="container-container-form-right-singin"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    props: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (value) => {
      dispatch({ type: "CHANGE_LOGIN", isLogin: value });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSingIn);
