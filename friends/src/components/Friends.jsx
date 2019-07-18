import React, {useEffect, useState} from 'react';
import {withFormik, Form, Field} from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import { Redirect } from 'react-router-dom'
import {axiosWithAuth} from './authRouter'

const Friends = ({ touched, errors}) => {

    useEffect(() => {
         const url =
      "http://localhost:5000/api/friends";
    axiosWithAuth()
      .get(url)
      .then(response => {
        
        console.log(response.data)
      })
      .catch(e => {
        console.log(e.response);
      });
    }, []) 
        
       

    return ( 
        <div>
            <Form className="form">
                <div className="form-group">
                    <label className="label">Name</label>
                    <Field
                    className="input"
                    name="name"
                    type="text"
                    autoComplete="off"
                    />
                    <p>{touched.name && errors.name}</p>
                </div>
                <div className="form-group">
                    <label className="label">Age</label>
                    <Field
                    className="input"
                    name="age"
                    type="age"
                    autoComplete="off"
                    />
                    <p>{touched.password && errors.password}</p>
                </div>
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
                
                <button className="btn">Add Friend</button>
                </Form>
        </div>
     );
}
 
export default withFormik({
  mapPropsToValues() {
    return {
      name: "",
      age: "",
      email: "",
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required(),
    age: Yup.string()
      .required(),
    email: Yup.string()
       .email()
       .required() ,
  }),
  handleSubmit(values, formikBag) {
    
  }
})(Friends);