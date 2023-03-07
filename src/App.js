import React, { useRef, useState } from "react";
import "./App.css";
import Grid from "@mui/material/Unstable_Grid2";
import person from "./assets/img/person.png";
import dayjs from "dayjs";
import nametag from "./assets/img/name_tag.png";
import dob from "./assets/img/cake.png";
import above18 from "./assets/img/18plus.png";
import medication from "./assets/img/current_medication.png";
import reason from "./assets/img/chief_complain.png";
import allergy from "./assets/img/allergy.png";
import state from "./assets/img/state.png";
import phone from "./assets/img/phone_no.png";
import upload from "./assets/img/upload_photo.png";
import add from "./assets/img/addIcon.png";
import { Box } from "@material-ui/core";

function App() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const guardiansFirstNameRef = useRef();
  const guardiansLastNameRef = useRef();
  const reasonForVisitRef = useRef();
  const currentMedicationsRef = useRef();
  const allergyRef = useRef();
  const [date, setDate] = useState(dayjs(""));
  const [radioValue, setRadioValue] = useState("Yes");
  const [selectedState, setSelectState] = useState("GJ");
  const [errorMessage, setErrorMessage] = useState("");
  const [dataObject, setDataObject] = useState({
    patientFirstName: "",
    patientLastName: "",
    patientDob: "",
    above18: "",
    guardianFirstName: "",
    guardianLastName: "",
    primaryReasonForVisit: "",
    currentMedications: "",
    allergies: "",
    state: "",
    pharmacyPhoneNumber: "",
  });

  const onSelectState = (e) => {
    setSelectState(e.target.value);
  };
  const onRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log("First Name :: ", firstNameRef.current?.value);
    const patientFirstName = firstNameRef.current
      ? firstNameRef.current.value
      : "";
    const patientLastName = lastNameRef.current
      ? lastNameRef.current.value
      : "";
    const guardianFirstName = guardiansFirstNameRef.current
      ? guardiansFirstNameRef.current.value
      : "";
    const guardianLastName = guardiansLastNameRef.current
      ? guardiansLastNameRef.current.value
      : "";
    const primaryReasonForVisit = reasonForVisitRef.current
      ? reasonForVisitRef.current.value
      : "";
    const currentMedications = currentMedicationsRef.current
      ? currentMedicationsRef.current.value
      : "";
    const allergies = allergyRef.current ? allergyRef.current.value : "";

    if (patientFirstName.length === 0) {
    } else if (patientLastName.length === 0) {
    } else if (guardianFirstName.length === 0) {
    } else if (guardianLastName.length === 0) {
    } else if (primaryReasonForVisit.length === 0) {
    } else if (currentMedications.length === 0) {
    } else {
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="App">
        <div className="header">
          <h2> Patient Info</h2>
          <p>Waiting Room / Patient Info</p>
          <hr
            style={{
              backgroundColor: "gainsboro",
              marginBottom: "30px",
              height: "0.5px",
            }}
          />
        </div>
        <div className="box">
          <Grid container spacing={4} columns={16}>
            <Grid xs={8}>
              <div className="inputdiv">
                <div className="label">
                  <img src={person} alt=" " />
                  <h5>Patient's First Name</h5>
                </div>
                <div className="field">
                  <input
                    ref={firstNameRef}
                    type="text"
                    className="input"
                    name="first_name"
                  />
                </div>
              </div>
            </Grid>

            <Grid xs={8}>
              <div className="inputdiv">
                <div className="label">
                  <img src={person} alt=" " />
                  <h5>Patient's Last Name</h5>
                </div>
                <div className="field">
                  <input
                    ref={lastNameRef}
                    type="text"
                    className="input"
                    name="last_name"
                  />
                </div>
              </div>
            </Grid>

            <Grid xs={8}>
              <div className="inputdiv">
                <div className="label">
                  <img src={dob} alt=" " />
                  <h5>Patient's DOB</h5>
                </div>
                <div className="field">
                  <input
                    type="date"
                    name="dob"
                    value={date}
                    onChange={setDate}
                  />
                </div>
              </div>
            </Grid>

            <Grid xs={8}>
              <div className="inputdiv2">
                <div className="label2">
                  <img src={above18} alt=" " />
                  <h5>Above 18?</h5>
                </div>
                <div>
                  <input
                    value={radioValue}
                    type="radio"
                    id="yes"
                    name="age"
                    onChange={onRadioChange}
                  />
                  <label
                    htmlFor="yes"
                    style={{
                      marginLeft: "10px",
                      marginRight: "30px",
                      fontSize: "15px",
                    }}
                  >
                    Yes
                  </label>

                  <input type="radio" id="no" name="age" />
                  <label
                    htmlFor="no"
                    style={{
                      marginLeft: "10px",
                      marginRight: "30px",
                      fontSize: "15px",
                    }}
                  >
                    No
                  </label>
                </div>
              </div>
            </Grid>

            <Grid xs={8}>
              <div className="inputdiv">
                <div className="label">
                  <img src={nametag} alt=" " />
                  <h5>Gaurdian's First Name</h5>
                </div>
                <div className="field">
                  <input
                    ref={guardiansFirstNameRef}
                    type="text"
                    className="input"
                    name="grd_first_name"
                  />
                </div>
              </div>
            </Grid>

            <Grid xs={8}>
              <div className="inputdiv">
                <div className="label">
                  <img src={nametag} alt=" " />
                  <h5>Gaurdian's Last Name</h5>
                </div>
                <div className="field">
                  <input
                    ref={guardiansLastNameRef}
                    type="text"
                    className="input"
                    name="grd_last_name"
                  />
                </div>
              </div>
            </Grid>

            <Grid xs={8}>
              <div className="inputdiv" style={{ height: "12vh" }}>
                <div className="label">
                  <img src={reason} alt=" " />
                  <h5>Primary Reason For Visit</h5>
                </div>
                <div className="field" style={{ overflowY: "auto" }}>
                  <textarea
                    className="textarea"
                    name="reason"
                    rows="5"
                    cols="40"
                  ></textarea>
                </div>
              </div>
            </Grid>

            <Grid xs={8}>
              <div className="inputdiv" style={{ height: "12vh" }}>
                <div className="label">
                  <img src={medication} alt=" " />
                  <h5>Current Medications</h5>
                </div>
                <div className="field" style={{ overflowY: "auto" }}>
                  <textarea
                    className="textarea"
                    name="medication"
                    rows="5"
                    cols="40"
                  ></textarea>
                </div>
              </div>
            </Grid>

            <Grid xs={8}>
              <div className="inputdiv" style={{ height: "12vh" }}>
                <div className="label">
                  <img src={allergy} alt=" " />
                  <h5>Allergies</h5>
                </div>
                <div className="field" style={{ overflowY: "auto" }}>
                  <textarea
                    className="textarea"
                    name="allergies"
                    rows="5"
                    cols="36"
                  ></textarea>
                </div>
              </div>
            </Grid>

            <Grid xs={8}>
              <div className="inputdiv">
                <div className="label">
                  <img src={state} alt=" " />
                  <h5>State</h5>
                </div>
                <div className="field">
                  <select
                    className="select"
                    value={selectedState}
                    onChange={onSelectState}
                  >
                    <option key="1" value="GJ" className="option">
                      Gujarat
                    </option>
                    <option key="2" value="MU" className="option">
                      Mumbai
                    </option>
                    <option key="3" value="MP" className="option">
                      Madhya Pradesh
                    </option>
                    <option key="4" value="RJ" className="option">
                      Rajasthan
                    </option>
                    <option key="5" value="KT" className="option">
                      Karnataka
                    </option>
                  </select>
                </div>
              </div>
            </Grid>

            <Grid xs={8}>
              <div className="inputdiv">
                <div className="label">
                  <img src={phone} alt=" " />
                  <h5>Pharmacy Phone Number</h5>
                </div>
                <div className="field">
                  <input type="number" className="input" name="mobile_number" />
                </div>
              </div>
            </Grid>

            <Grid xs={8}>
              <div className="inputdiv" style={{ height: "15vh" }}>
                <div className="label">
                  <img src={add} alt=" " />
                  <h5>Upload Photos {"(optional)"}</h5>
                </div>
                <div className="field">
                  <label className="custom-file-upload">
                    <input type="file" name="image" />
                    <img src={add} alt=" " width={30} />
                  </label>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="footer">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default App;
