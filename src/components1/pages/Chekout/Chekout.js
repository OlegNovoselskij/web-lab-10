import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Chekout.css';
import { Link } from 'react-router-dom';

// Компонент для відображення повідомлень про помилки
const ErrorComponent = ({ errors }) => (
  <div className="error-messages">
    {Object.keys(errors).map((field) => (
      <p key={field} className="error-message">
        {errors[field]}
      </p>
    ))}
  </div>
);

const CheckoutForm = ({ onSuccess }) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First Name is required')
      .max(20, 'First Name must be at most 20 characters'),
    lastName: Yup.string()
      .required('Last Name is required')
      .max(20, 'Last Name must be at most 20 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email format is incorrect'),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(/^\d+$/, 'Phone number must contain only digits')
      .min(10, 'Phone number must be at least 10 digits'),
    address: Yup.string()
      .required('Address is required')
      .max(100, 'Address must be at most 100 characters'),
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form submitted:', values);
        onSuccess();
      }}
    >
      {({ errors, touched }) => (
        <Form className="checkout-form">
  <h1 className="form-title">Checkout</h1>
  <div className="form-field">
    <label className="form-label">First Name</label>
    <Field name="firstName" type="text" className="form-input" />
    <ErrorMessage name="firstName" component="div" className="field-error" />
  </div>
  <div className="form-field">
    <label className="form-label">Last Name</label>
    <Field name="lastName" type="text" className="form-input" />
    <ErrorMessage name="lastName" component="div" className="field-error" />
  </div>
  <div className="form-field">
    <label className="form-label">Email</label>
    <Field name="email" type="email" className="form-input" />
    <ErrorMessage name="email" component="div" className="field-error" />
  </div>
  <div className="form-field">
    <label className="form-label">Phone</label>
    <Field name="phone" type="text" className="form-input" />
    <ErrorMessage name="phone" component="div" className="field-error" />
  </div>
  <div className="form-field">
    <label className="form-label">Address</label>
    <Field name="address" type="text" className="form-input" />
    <ErrorMessage name="address" component="div" className="field-error" />
  </div>
  <ErrorComponent errors={errors} />

  <div className="form-buttons">
    <Link style={{textDecoration:'none'}} to={'/catalog'} type="button" className="form-back-button">
      Go Back
    </Link>
    <button type="submit" className="form-submit-button">
      Continue
    </button>
  </div>
</Form>

      )}
    </Formik>
  );
};

const SuccessPage = () => (
  <div className="success-page">
    <div className="success-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="100"
        height="100"
        fill="#28a745"
      >
        <circle cx="12" cy="12" r="10" fill="#28a745" />
        <path
          fill="#fff"
          d="M10.2 16.6l-4.3-4.3 1.4-1.4 2.9 2.9 5.7-5.7 1.4 1.4z"
        />
      </svg>
    </div>
    <h1 className="success-title">Success!</h1>
    <p className="success-message">Your order was sent to processing!</p>
    <p className="success-details">Check your email box for further information.</p>
    <Link style={{textDecoration:'none'}} to={'/Cart/catalog'} className="success-button" >
      Go back to Catalog
    </Link>
  </div>
);

const App = () => {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <div>
      {!submitted ? (
        <CheckoutForm onSuccess={() => setSubmitted(true)} />
      ) : (
        <SuccessPage />
      )}
    </div>
  );
};

export default App;
