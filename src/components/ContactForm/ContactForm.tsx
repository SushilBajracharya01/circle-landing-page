import * as Yup from 'yup';
import { Form, Formik } from "formik";

//
import Input from "../Input";

//
import { sendEmail } from '../../utils/brevo';

//
const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
}

//
const ContactFormSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('First name is required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last name is required'),
    email: Yup.string().email('Invalid email!').required('Email is required'),
    message: Yup.string().required('Message is required'),
});


/**
 * 
 */
export default function ContactForm() {
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={ContactFormSchema}
                onSubmit={async (values, { resetForm, setSubmitting }) => {
                    try {
                        await sendEmail({
                            FIRSTNAME: values.firstName,
                            LASTNAME: values.lastName,
                            SUBJECT: values.subject,
                            MESSAGE: values.message,
                            EMAIL: values.email,
                        });
                        resetForm();
                        setSubmitting(false);
                    }
                    catch (error) {
                        setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="grid grid-cols-12 md:gap-6">
                            <Input
                                label="First name"
                                placeholder="John"
                                name="firstName"
                                className="col-span-12 md:col-span-6 mb-6"
                            />

                            <Input
                                label="Last name"
                                placeholder="Doe"
                                name="lastName"
                                className="col-span-12 md:col-span-6 mb-6"
                            />
                        </div>

                        <Input
                            label="Email"
                            placeholder="johnDoe@gmail.com"
                            name="email"
                            type="email"
                            className="mb-6"
                        />

                        <Input
                            label="Subject"
                            placeholder="Enter subject"
                            name="subject"
                            className="mb-6"
                        />

                        <Input
                            label="Message"
                            placeholder="Aa..."
                            name="message"
                            type="textarea"
                            className="mb-6"
                        />

                        <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}