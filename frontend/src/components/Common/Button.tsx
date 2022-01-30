import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

type ColorProps = {
  color: string;
  outline?: boolean;
}

type SizeProps = {
  size: keyof typeof sizes;   // Do Not Use `size: string`
}

type FullwidthProps = {
  fullWidth?: boolean;
}

type ButtonProps = {
  children?: any;
  color: string;
  outline?: boolean;
  size: keyof typeof sizes;
  fullWidth?: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const colorStyles = css<ColorProps>`
  ${({ color }) => {
    const selected = color;
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${(props: ColorProps) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem'
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem'
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem'
  }
};

const sizeStyles = css<SizeProps>`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css<FullwidthProps>`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

const StyledButton = styled.button<ButtonProps>`
  /* 공통 스타일 */
  display: inline-flex;
  align-items: center;
  justify-center: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-family: "Carmen Sans";
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }

  ${fullWidthStyle}
`;

function Button({ children, color, size, outline, fullWidth, ...rest }: ButtonProps) {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: '#0D2D84',
  size: 'medium'
};

export default Button;