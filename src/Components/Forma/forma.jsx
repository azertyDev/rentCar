import React, { Fragment } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});
const FormaComponent = props => {
  return (
    <Fragment>
      <Formik
        initialValues={{
          name:props.user.name || "",
          email: props.user.email || ""
        }}
        enableReinitialize
        validationSchema={SignupSchema}
      >
        {({ errors, touched }) => (
          <Form id="form_el">
          <div className="form_element">
            <Field name="name" />
            <p className="error"> {errors.name && touched.name ? <div>{errors.name}</div> : null}</p>
           </div>
           <div className="form_element">
            <Field name="email" type="email" />
             <p className="error">{errors.email && touched.email ? <div>{errors.email}</div> : null}</p>
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default FormaComponent;
