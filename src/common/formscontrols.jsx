import React from "react";
import s from "./common.module.css";
import { Field} from 'redux-form'

export const FormArea = ({ input, meta : {touched, error}, children}) => {
  const hasError = touched && error;
  return (
    <div className={s.formsControl + " " + (hasError ? s.error : " ")}>
      {children}
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const textArea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormArea {...props}>
      <textarea {...input} {...restProps} />
    </FormArea>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormArea {...props}>
      <input {...input} {...restProps} />
    </FormArea>
  );
};

export const createField = (place, name, component, validate, props={}, text='') => {
  return (
    <div>
      <Field
        placeholder={place}
        name={name}
        component={component}
        validate={validate}
        {...props}
      />{text}
    </div>
  );
};
