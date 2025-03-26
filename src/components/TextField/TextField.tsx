import { TextField, TextFieldProps } from "@mui/material";
import { Field } from "formik";

export const FormikTextField = (props: TextFieldProps) => (
    <Field
        as={TextField}
        {...props}
    />
);