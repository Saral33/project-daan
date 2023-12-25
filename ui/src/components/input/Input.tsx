import React from 'react';

type InputProps = {
  value?: string | number;
  onChange?: (e: any) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  type?: string;
  description?: boolean;
  name?: string;
};
const Input = ({
  value,
  onChange,
  placeholder,
  label,
  required,
  type = 'text',
  description = false,
  name,
}: InputProps) => {
  return (
    <div className="space-y-3 text-gray-400">
      <label className="flex ">
        <span>{label}</span> {required && <span>*</span>}{' '}
      </label>
      {description ? (
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full text-gray-200 min-h-[160px] bg-transparent py-1 px-4 border outline-none border-gray-500 rounded-md"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className="w-full text-gray-200 bg-transparent py-1 px-4 border outline-none border-gray-500 rounded-md"
        />
      )}
    </div>
  );
};

export default Input;
