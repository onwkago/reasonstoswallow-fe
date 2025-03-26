import { Formik, FormikHelpers } from "formik";
import { Alert, Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { FormikTextField } from "../components/TextField/TextField.tsx";
import { object, string } from "yup";
import { useState } from "react";

type Form = { reason: string; description: string; };

const Propose = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleSubmit = (values: Form, { resetForm }: FormikHelpers<Form>) => {
        if (showErrorMessage) {
            setShowErrorMessage(false);
        }
        console.log("This is definitely getting shipped somewhere...", values); //todo
        resetForm();
        setShowSuccessMessage(true);
    };

    const onFieldFocus = () => {
        if (showSuccessMessage) {
            setShowSuccessMessage(false);
        }
    }

    return (
        <Formik
            initialValues={{
                reason: "",
                description: ""
            }}
            onSubmit={handleSubmit}
            validationSchema={object({
                reason: string().required("Do not leave empty").nullable().min(3, "Please tell more"),
                description: string().nullable().max(1000, ({ value }) => `Too many symbols (${value.length}/1000)`),
            })}
        >
            {({errors, submitForm}) => (
                <Box
                    display="flex"
                    flexDirection="column"
                    gap={2}
                    paddingX={{xs: 0, md: "20%"}}
                    paddingY={3}
                >
                    {showErrorMessage && (errors.reason || errors.description) &&
                        <Alert
                            variant="filled"
                            color="error"
                            severity="error"
                        >
                            There has been error. Please check the form.
                            {errors.reason && <><br /> Reason:  {errors.reason}</>}
                            {errors.description && <><br /> Description:  {errors.description}</>}
                        </Alert>
                    }
                    {showSuccessMessage &&
                        <Alert
                            variant="outlined"
                            color="success"
                        >
                            Your argumentation will be reviewed and, hopefully, added to the list
                        </Alert>
                    }
                    <Typography variant="h3"> Propose a reason to swallow</Typography>
                    <FormikTextField
                        onFocus={onFieldFocus}
                        name="reason"
                        label="Reason"
                        error={!!errors.reason}
                        helperText={errors.reason}
                    />
                    <FormikTextField
                        onFocus={onFieldFocus}
                        name="description"
                        label="Description"
                        error={!!errors.description}
                        helperText={errors.description}
                        multiline
                        minRows={3}
                        maxRows={7}
                    />
                    <Button
                        variant="outlined"
                        onClick={() => {
                            if (errors.reason || errors.description) {
                                setShowErrorMessage(true);
                            } else {
                                submitForm();
                            }
                        }}
                    >
                        Gulp
                    </Button>
                </Box>
            )}
        </Formik>
    );
}

export default Propose;