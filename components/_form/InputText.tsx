import React from 'react';

interface Props {
    style: string | null;
    icon: string | null;
    name: string;
    label: string | null;
    placeholder: string | null;
    props: any;
    tips: string | null;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<Props> = ({
    style,
    icon,
    name,
    label,
    placeholder,
    tips,
    props,
    disabled,
    onChange
}) => {
    const clear = () => {
        if (disabled) return;
        props.setFieldValue(name, '');
    };

    const handleFocus = (e: any) => {
        e.target.select();
    };

    return (
        <div className={`mb-0 ${style}`}>
            {label && (
                <label className="control-label" htmlFor={name}>
                    {label}
                </label>
            )}
            <div className="relative">
                {icon && <i className={`f-icon ${icon}`} />}
                {tips && <em className="input-tips">{tips}</em>}

                <input
                    className={icon ? 'form-control-icon' : 'form-control checkout'}
                    placeholder={placeholder ? placeholder : ''}
                    type="text"
                    onFocus={handleFocus}
                    onChange={onChange ? onChange : props.handleChange}
                    value={props.values[name]}
                    name={name}
                    disabled={disabled}
                />
                <i role="presentation" className="input-close cursor-pointer" onClick={clear} />
                {props.errors[name] && <div className="error-el">{props.errors[name]}</div>}
            </div>
        </div>
    );
};

export { InputText };
