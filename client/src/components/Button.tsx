import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const StyledButton = styled.button<ButtonProps>`
  font-family: Arial, sans-serif;
  font-size: px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color:  'white';

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledButton
      {...props}
    >
      {children}
    </StyledButton>
  );
};