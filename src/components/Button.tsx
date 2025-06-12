import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'blue' | 'yellow' | 'green' | 'red' | 'blueOutline';
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'blue',
  disabled = false,
  icon,
}) => {
  const baseStyles = {
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: '16px',
    fontWeight: 500,
    opacity: disabled ? 0.7 : 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  };

  const variantStyles = {
    blue: {
      backgroundColor: 'var(--blue)',
      color: 'white'
    },
    yellow: {
      backgroundColor: 'var(--yellow)',
      color: 'white'
    },
    green: {
      backgroundColor: 'var(--green)',
      color: 'white'
    },
    red: {
      backgroundColor: 'var(--red)',
      color: 'white'
    },
    blueOutline: {
        backgroundColor: 'white',
        color: 'var(--blue)',
        border: '1px solid var(--blue)'
      }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...baseStyles,
        ...variantStyles[variant],
      }}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default Button; 