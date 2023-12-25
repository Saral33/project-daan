import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant: 'primary' | 'error';
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
};

const variantTypes = {
  primary:
    'bg-primary text-white hover:bg-green-600 transition-all duration-150 hover:scale-105',
  error:
    'bg-red-600 text-white hover:bg-red-800 transition-all duration-150 hover:scale-105',
};
const Button = ({ children, variant, onClick, type }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variantTypes[variant]} !cursor-pointer px-2 py-2 w-full outline-none rounded-md focus:border-none text-sm font-semibold`}
    >
      {children}
    </button>
  );
};

export default Button;
