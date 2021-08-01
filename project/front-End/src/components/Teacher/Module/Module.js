/* eslint-disable no-unreachable */
import { useForm } from "react-hook-form";
import { React } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Module.css";
import "bootstrap/dist/css/bootstrap.css";
function Module() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      let formData = new FormData();

      formData.append("name", data.name);
      formData.append("cridit", data.cridit);
      formData.append("coeficient", data.coeficient);
      formData.append("cours", data.cours);
      formData.append("Td", data.Td);
      formData.append("Tp", data.Tp);
      formData.append("file", data.file[0]);

      const response = await axios.post(
        "http://localhost:8080/modules/addModule",
        formData
      );

      if (response.data.success) {
        setTimeout(() => {
          toast.success("Insertion success");
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
            Name
          </label>
          <input
            type="text"
            name="name"
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
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <label htmlFor="cours" style={{ marginRight: "10px" }}>
            Cours :
          </label>
          <select
            ref={register}
            name="cours"
            id="grouped-native-select"
            style={{ marginRight: "10px" }}
          >
            
            <option value="1">1 h</option>
            <option value="1.">1.5 h</option>
            <option value="2">2 h</option>
          </select>
        </div>

        <div style={{ display: "flex", alignItems: "baseline" }}>
          <label style={{ marginRight: "10px" }}>Tp :</label>
          <select
            native
            ref={register}
            name="Tp"
            id="grouped-native-select"
            style={{ marginRight: "10px" }}
          >
            <option value="1.5">1 h</option>
            <option value="1">1.5 h</option>
            <option value="2">2 h</option>
          </select>
        </div>

        <div style={{ display: "flex", alignItems: "baseline" }}>
          <label htmlFor="Td" style={{ marginRight: "10px" }}>
            Td :
          </label>
          <select
            native
            ref={register}
            name="Td"
            id="grouped-native-select"
            style={{ marginRight: "10px" }}
          >
            <option value="1.5">1 h</option>
            <option value="1">1.5 h</option>
            <option value="2">2 h</option>
          </select>
        </div>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <label htmlFor="coeficient" style={{ marginRight: "10px" }}>
            Coeficient :
          </label>
          <select
            ref={register}
            name="coeficient"
            id="grouped-native-select"
            style={{ marginRight: "10px" }}
          >
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        <div style={{ display: "flex", alignItems: "baseline" }}>
          <label htmlFor="cridit" style={{ marginRight: "10px" }}>
            Cridit :
          </label>
          <select
            native
            ref={register}
            name="cridit"
            id="grouped-native-select"
            style={{ marginRight: "10px" }}
          >
            <option value="3">4</option>
            <option value="2">5</option>
            <option value="4">7</option>
            <option value="3">10</option>
          </select>
        </div>

        <div className="contaner_button spice">
          <button type="submit" className="submit">
            continue
          </button>
        </div>
      </form>
    </div>
  );
}
export default Module;
