/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React } from "react";
import "./FormSingUp.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { authenticate, isAuth } from "../../../../src/helper/auth";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const FormSingUp = (props) => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/singUp",
        data
      );

      if (response.data.insertion) {
        authenticate(response, () => {
          if (isAuth()) {
            setTimeout(() => {
              toast.success("Sing-up success");
              props.setLogin(isAuth());
              history.push(response.data.link);
            }, 1500);
          } else {
            toast.warn("filed to sing up please try again");
          }
        });
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className="container-form">
      <ToastContainer />
      <div className="container-container-form">
        <div className="container-container-form-left">
          <form className="form_form" onSubmit={handleSubmit(onSubmit)}>
            <div className="content_first_name">
              <label htmlFor="first-name" className="label">
                User name
              </label>
              <input
                type="text"
                name="username"
                id="user-name"
                className="input_first-name"
                placeholder="..."
                ref={register}
                required
              />
            </div>
            <div class="content_last_name">
              <label htmlFor="last-name" className="label">
                First name
              </label>
              <input
                type="text"
                name="firstname"
                id="first-name"
                className="input_last-name"
                placeholder="........"
                ref={register}
                required
              />
            </div>

            <div className="contaner_user-name spice">
              <label htmlFor="user" className="label">
                Last name
              </label>
              <input
                type="text"
                name="lastname"
                id="last-name"
                className="input_user-name"
                placeholder="........"
                ref={register}
                required
              />
            </div>

            <div className="contaner_email spice">
              <label htmlFor="email" className="label">
                email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input_email"
                placeholder="example@univ-constantine.dz"
                ref={register}
                required
              />
            </div>
            <div className="contaner_email spice">
              <label htmlFor="email" className="label">
                Phone Number
              </label>
              <input
                type="phone"
                name="phone"
                id="phone"
                className="input_phoneNumber"
                placeholder="..........."
                ref={register}
                required
              />
            </div>
            <div class="form-group">
              <label
                htmlFor="input_select_role"
                style={{
                  marginRight: "20px",
                  marginTop: "10px",
                  fontSize: "13px",
                  color: "#336278",
                  fontWeight: "700",
                }}
              >
                Role :
              </label>
              <select
                className="input_select_role spice"
                name="role"
                ref={register}
                required
                native
                // eslint-disable-next-line react/jsx-no-duplicate-props
                id="grouped-native-select"
                style={{ fontSize: "13px", color: "#2EE59D" }}
              >
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
              </select>

              {/* <Select
             
                ref={register}
                name="role"
                
               }
                >
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
              </Select> */}
            </div>
            <div className="contaner_password spice">
              <label htmlFor="password" className="label">
                password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="input_password"
                placeholder="............."
                ref={register}
                required
              />
            </div>
            <div className="contaner_checkBox spice">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="input_checkbox"
                required
              />
              <span class="span_checkbox">
                I have read and agree to the
                <a
                  href="#"
                  className="a_check_box"
                  style={{ marginRight: "5px", marginLeft: "3px" }}
                >
                  Term of User
                </a>
                and
                <a
                  href="#"
                  className="a_check_box"
                  style={{ marginLeft: "3px" }}
                >
                  Customer Privacy Policy
                </a>
              </span>
            </div>

            <div className="contaner_button spice">
              <button type="submit" className="submit">
                continue
              </button>
            </div>
          </form>
        </div>
        <div className="container-container-form-right"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FormSingUp);
