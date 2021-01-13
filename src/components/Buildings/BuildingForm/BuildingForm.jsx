import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import { Form, Field } from "react-final-form";
import { postBuilding as postBuildingAction } from "../../../redux/actions/buildingActions";
import {putBuilding as putBuildingAction } from "../../../redux/actions/buildingActions";
import { hideModal as hideModalAction } from "../../../redux/actions/modalActions";
import styles from "./buildingForm.module.css";
import {
  required,
  name,
  address,
  phone,
  customerName,
  composeValidators,
} from "../../../utils/validations";
import TextInput from "../../SharedComponents/TextInput/TextInput";
import Select from "../../SharedComponents/Select/Select";

const BuildingForm = (props) => {
  const onSubmitBuilding = (values) => {
    console.log(values);
    props.postBuilding(values);
    props.putBuilding(values);
    props.hideModal();
  };

  const Boilers = [
    { id: "A", value: "A" },
    { id: "B", value: "B" },
    { id: "C", value: "C" },
    { id: "D", value: "D" },
  ];

  return (
    <div className={styles.addBuildingContainer}>
      <Form
        onSubmit={onSubmitBuilding}
        initialValues={{
          id: "",
          name: "",
          address: "",
          phone: "",
          customerId: "",
          customerName: "",
          installedBoilers: "",
        }}
      
        render=
        {({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <label>ID</label>
              <Field
                name="id"
                component={TextInput}
                type="text"
                placeholder="ID"
                validate={required}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Name</label>
              <Field
                name="name"
                component={TextInput}
                type="text"
                placeholder="Name"
                validate={composeValidators(required, name)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Address</label>
              <Field
                name="address"
                component={TextInput}
                type="text"
                placeholder="Address"
                validate={composeValidators(required, address)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Phone</label>
              <Field
                name="phone"
                component={TextInput}
                type="text"
                placeholder="Phone"
                validate={composeValidators(required, phone)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Customer ID</label>
              <Field
                name="customerId"
                component={TextInput}
                type="text"
                placeholder="CustomerID"
                validate={required}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label>Customer Name</label>
              <Field
                name="customerName"
                component={TextInput}
                type="text"
                placeholder="Customer Name"
                validate={composeValidators(required, customerName)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <Field
                name="installedBoilers"
                component={Select}
                label="Installed Boilers"
                options={Boilers}
                validate={required}
              >
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four">4</option>
              </Field>
            </div>
            <div className={styles.buttonWrapper}>
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    postBuilding: postBuildingAction,
    putBuilding: putBuildingAction,
    hideModal: hideModalAction,
  },dispatch);
};

export default connect(null, mapDispatchToProps)(BuildingForm);
