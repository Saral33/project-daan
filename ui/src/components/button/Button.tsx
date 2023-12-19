import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant: 'primary';
  onClick?: () => void;
};

const variantTypes = {
  primary:
    'bg-primary text-white hover:bg-green-600 transition-all duration-150 hover:scale-105',
};
const Button = ({ children, variant, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${variantTypes[variant]} px-2 py-2 rounded-md text-sm font-semibold`}
    >
      {children}
    </button>
  );
};

export default Button;
