import { ErrorMessage, Field } from "formik";
import { IInputProps } from "../types";

export default function Input({ label, className, placeholder, name, type = 'text', disabled }: IInputProps) {

    let content = null;

    switch (type) {
        case 'textarea':
            content = <Field
                name={name}
                as="textarea"
                className="border-2 border-primary-100 px-3 py-2 w-full rounded focus:outline-none focus:border-2 focus:border-primary-600 placeholder:text-gray-400 placeholder:italic"
                id={name}
                placeholder={placeholder}
                disabled={disabled}
            />
            break;
        default:
            content = <Field
                className="border-2 border-primary-100 px-3 py-2 w-full rounded focus:outline-none focus:border-2 focus:border-primary-600 placeholder:text-gray-400 placeholder:italic"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                disabled={disabled}
            />
    }
    return (
        <div className={`relative ${className ?? ''}`}>
            {
                label &&
                <label htmlFor={name} className="block font-semibold text-gray-700">
                    {label}
                </label>
            }

            {content}

            <ErrorMessage name={name} component="div" className="text-sm text-red-600 absolute -bottom-5" />
        </div>
    )
}