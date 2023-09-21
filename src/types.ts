export interface IFeature {
    name: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon?: any;
}

export interface IIconProps {
    title: string;
    className: string;
}

export interface IValueProps {
    name: string;
    description: string;
    icon: string;
}

export type TInputType = 'text' | 'email' | 'textarea';
export interface IInputProps {
    label?: string;
    className?: string;
    placeholder?: string;
    name: string;
    type?: TInputType;
    disabled?: boolean;
}

export interface IContactFormProps {
    FIRSTNAME: string;
    LASTNAME: string;
    EMAIL: string;
    SUBJECT: string;
    MESSAGE: string;
}

export interface IContactProps {
    FIRSTNAME: string;
    LASTNAME: string;
    EMAIL: string;
}