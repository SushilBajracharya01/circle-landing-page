import { ErrorMessage, Field } from "formik";
import { IInputProps } from "../types";

export default function Input({ label, className, placeholder, name, type = 'text' }: IInputProps) {

    let content = null;

    switch (type) {
        case 'textarea':
            content = <Field name={name}>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {({ field }: any) => {
                    return (
                        < textarea
                            className="border-2 border-primary-100 px-3 py-2 w-full rounded focus:outline-none focus:border-2 focus:border-primary-600 placeholder:text-gray-400 placeholder:italic"
                            value={field.value}
                            onChange={field.onChange}
                            placeholder={placeholder}
                        />
                    );
                }}
            </Field>
            break;
        default:
            content = <Field
                className="border-2 border-primary-100 px-3 py-2 w-full rounded focus:outline-none focus:border-2 focus:border-primary-600 placeholder:text-gray-400 placeholder:italic"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
            />
    }
    return (
        <div className={`${className ?? ''}`}>
            {
                label &&
                <label htmlFor={name} className="block font-semibold text-gray-700">
                    {label}
                </label>
            }

            {content}

            <ErrorMessage name={name} component="div" />
        </div>
    )
}