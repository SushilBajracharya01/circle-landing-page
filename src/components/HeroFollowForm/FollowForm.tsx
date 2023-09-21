import * as Yup from 'yup';
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import { CONTACT_LIST_IDS, EMAIL_TEMPLATE_IDS } from "../../utils/constants";
import { createContact, sendEmail } from "../../utils/brevo";
import Input from '../Input';
import { VscLoading } from 'react-icons/vsc';

//
const FollowFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email!').required('Email is required'),
});

export default function FollowForm() {
    return (
        <div>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={FollowFormSchema}
                onSubmit={async (values, { resetForm, setSubmitting }) => {
                    try {
                        await createContact({
                            email: values.email,
                            attributes: {
                                EMAIL: values.email,
                            },
                            listIds: [CONTACT_LIST_IDS.FOLLOWED]
                        });

                        await sendEmail({
                            SUBJECT: 'Following Circle',
                            MESSAGE: 'I want to follow circle',
                            EMAIL: values.email,
                        }, {
                            templateId: EMAIL_TEMPLATE_IDS.FOLLOW_FORM
                        });
                        resetForm();
                        toast.success('You have followed circle!')
                        setSubmitting(false);
                    }
                    catch (error) {
                        setSubmitting(false);
                        toast.error('Oops! Something went wrong.')
                    }
                }}
            >

                {({ isSubmitting }) => (
                    <Form className='flex items-center'>
                        <Input
                            name='email'
                            disabled={isSubmitting}
                            placeholder='john.doe@gmail.com'
                            type='email'
                            className='w-2/3'
                        />

                        <button className="inline-flex items-center justify-center px-5 py-2 ml-3 text-base font-medium text-center text-white rounded bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-900 disabled:opacity-70"
                            disabled={isSubmitting}
                        >
                            {
                                isSubmitting ? <VscLoading className="animate-spin" /> : "Follow"
                            }
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}