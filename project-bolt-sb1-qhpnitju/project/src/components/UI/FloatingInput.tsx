import React, { useState, useRef } from 'react';

interface FloatingInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  className?: string;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  className = ''
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isActive = isFocused || value.length > 0;

  return (
    <div className={`relative ${className}`}>
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        className={`w-full px-4 pt-6 pb-2 border-2 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-white transition-all duration-200 focus:outline-none ${
          error
            ? 'border-red-500 focus:border-red-500'
            : 'border-gray-200 dark:border-dark-700 focus:border-primary-500'
        }`}
      />
      <label
        onClick={() => inputRef.current?.focus()}
        className={`absolute left-4 cursor-text transition-all duration-200 ${
          isActive
            ? 'top-2 text-xs font-medium text-primary-500'
            : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
        }`}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-500 animate-slide-in">{error}</p>
      )}
    </div>
  );
};

export default FloatingInput;