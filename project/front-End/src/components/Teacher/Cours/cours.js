/* eslint-disable no-unreachable */
import { useForm } from "react-hook-form";
import { React } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./cours.css";
import "bootstrap/dist/css/bootstrap.css";
import Select from "@material-ui/core/Select";

function Cours() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      let formData = new FormData();

      formData.append("description", data.description);
      formData.append("file", data.file[0]);
      formData.append("module", data.module);

      console.log(formData);
      const response = await axios.post(
        "http://localhost:8080/modules/addcours",
        formData
      );
       
      if (response.data.success) {
        setTimeout(() => {
          toast.success("Insertion success");

          // toast.info("");
        }, 1500);
      } else {
        toast.warn("insertion is false please try again");
      }
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <div className="container-courses">
      <ToastContainer />
      <form className="form-add-cours" onSubmit={handleSubmit(onSubmit)}>
        <div className="content_first_name">
          <label htmlFor="description" className="label">
            description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className="input_first-name"
            ref={register}
            required
          />
        </div>
        <div class="custom-file">
          <input
            type="file"
            name="file"
            class="custom-file-input"
            id="customFile"
            ref={register}
            required
          />
          <label class="custom-file-label" for="customFile">
            Choose file
          </label>
        </div>

        <select native ref={register} name="module" id="grouped-native-select">
          <option value="Architecture logiciel">AL</option>
          <option value="Ingenire derige par le model">IDM</option>
          <option value="Administration base de donnes">ABD</option>
          <option value="Programmation multi agent">POA</option>
          <option value="services web">SWAP</option>
          <option value="Method Agil">MAG</option>
        </select>

        <div className="contaner_button spice">
          <button type="submit" className="submit">
            continue
          </button>
        </div>
      </form>
    </div>
  );
}
export default Cours;
