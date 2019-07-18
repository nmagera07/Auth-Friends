import React from 'react';
import {withFormik, Form, Field} from 'formik'
import axios from 'axios'
import * as Yup from 'yup'

const Login = ({ touched, errors}) => {
    return ( 
        <div>
            <Form className="form">
                <div className="form-group">
                    <label className="label">Email</label>
                    <Field
                    className="input"
                    name="email"
                    type="email"
                    autoComplete="off"
                    />
                    <p>{touched.email && errors.email}</p>
                </div>
                <div className="form-group">
                    <label className="label">Password</label>
                    <Field
                    className="input"
                    name="password"
                    type="password"
                    autoComplete="off"
                    />
                </div>
                <p>{touched.password && errors.password}</p>
                <button className="btn">Submit &rarr;</button>
                </Form>
        </div>
     );
}
 
export default withFormik({
  mapPropsToValues() {
    return {
      email: "",
      password: ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required()
  }),
  handleSubmit(values, formikBag) {
    const url =
      "https://localhost:5000//api/login";
    axios
      .post(url, values)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        
      })
      .catch(e => {
        console.log(e.response.data);
      });
  }
})(Login);