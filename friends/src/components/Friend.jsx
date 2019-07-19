import React, {useState} from 'react';
import {withFormik, Form, Field} from 'formik'
import {axiosWithAuth} from './authRouter'
import * as Yup from 'yup'
import axios from 'axios'


const Friend = (props) => {
    console.log("props", props)
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
                    
                </div>
                <div className="form-group">
                    <label className="label">Age</label>
                    <Field
                    className="input"
                    name="age"
                    type="age"
                    autoComplete="off"
                    />
                    
                </div>
                <div className="form-group">
                    <label className="label">Email</label>
                    <Field
                    className="input"
                    name="email"
                    type="email"
                    autoComplete="off"
                    />
                    
                </div>
                
                <button className="btn" type="submit" >Add Friend</button>
                </Form>
        </div>
     );
}

export default withFormik({
  mapPropsToValues({name, age, email}) {
    return {  
      name: name || "",
      age: age || "",
      email: email || "",
      
    };
  },
//   validationSchema: Yup.object().shape({
//     name: Yup.string()
//       .required(),
//     age: Yup.string()
//       .required(),
//     email: Yup.string()
//        .email()
//        .required() ,
//   }),
  handleSubmit(values, formikBag) {
     const url = "http://localhost:5000/api/friends";
     console.log("values", values)
        axios
            
            .post(url, values, {headers: {Authorization: localStorage.getItem('token')}})
            .then(response => {
                formikBag.resetForm()
                // setSubmitting(false)
                formikBag.props.setFriends(response.data)
                console.log('add data', response.data)
                console.log('values2', values)
            })
            .catch(e => {
                console.log(e)
            })
  }
})(Friend);
 
