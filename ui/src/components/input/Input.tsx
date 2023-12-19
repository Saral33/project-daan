import React from 'react';

type InputProps = {
  value?: string;
  onChange?: () => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  type?: string;
  description?: boolean;
};
const Input = ({
  value,
  onChange,
  placeholder,
  label,
  required,
  type = 'text',
  description = false,
}: InputProps) => {
  return (
    <div className="space-y-3 text-gray-400">
      <label className="flex ">
        <span>{label}</span> {required && <span>*</span>}{' '}
      </label>
      {description ? (
        <textarea
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full min-h-[160px] bg-transparent py-1 px-4 border outline-none border-gray-500 rounded-md"
        />
      ) : (
        <input
          type={type}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className="w-full bg-transparent py-1 px-4 border outline-none border-gray-500 rounded-md"
        />
      )}
    </div>
  );
};

export default Input;
