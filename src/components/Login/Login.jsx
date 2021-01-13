import React from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextInput from "../Select/TextInput/TextInput";
import required from "../../utils/validations";
import { login as loginAction} from "../../redux/actions/authActions";
import styles from "./login.module.css";

const Login = ({ login }) => {
  const onSubmitLogin = (values) => {
    login(values);
  };

  return (
    <div className={styles.logincontainer}>
      <div className={styles.formContainer}>
        <h1>Login</h1>
        <Form
          onSubmit={onSubmitLogin}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div className={styles.inputWrapper}>
                <Field
                  name="email"
                  component={TextInput}
                  type="text"
                  placeholder="Email"
                  label="Email"
                  validate={required}
                />
              </div>
              <div className={styles.inputWrapper}>
                <Field
                  name="passwordl"
                  component={TextInput}
                  type="password"
                  placeholder="Password"
                  label="Password"
                  validate={required}
                />
              </div>
              <div className={styles.buttonWrapper}>
                <button type="submit" disabled={submitting || pristine}>
                  Login
                </button>
              </div>
            </form>
          )}
        ></Form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login: loginAction
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Login);
