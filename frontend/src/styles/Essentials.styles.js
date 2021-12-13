import styled, { css } from "styled-components";

export const Flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  display: flex; 
  @media screen and (min-width: 1200px) {
    ${({ lg, md, sm, sx, spacing = 1 }) =>
      `width:calc(${(100 / 12) * (lg || md || sm || sx)}% - ${spacing}px) ;`}
  }

  @media screen and (min-width: 992px) and (max-width: 1200px) {
    ${({ lg, md, sm, sx, spacing = 1 }) =>
      `width:calc(${(100 / 12) * (md || lg || sm || sx)}% - ${spacing}px) ;`}
  }
  @media screen and (min-width: 600px) and (max-width: 992px) {
    ${({ lg, md, sm, sx, spacing = 1 }) =>
      `width:calc(${(100 / 12) * (sm || md || lg || sx)}% - ${spacing}px) ;`}
  }
  @media screen and (max-width: 768px) {
    ${({ lg, md, sm, sx, spacing = 1 }) =>
      `width:calc(${(100 / 12) * (sx || sm || md || lg)}% - ${spacing}px) ;`}
  }
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "nowrap")};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;
  @media only screen and (min-width: 768px) {
    padding: 0 30px;
  }

  display: flex;
`;
export const Grid = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "nowrap")};
  @media only screen and (min-width: 768px) {
    flex-wrap: wrap;
  }

  width: 100%;
`;

export const Button = styled.button`
  background: var(
    --color-${({ primary , secondary, transparent }) => (primary ? "primary" : secondary ? "secondary" : transparent ? "transparent" : "primary")}
  );
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  text-align: center;
  font-weight: 600;
  padding: 0.75rem 1rem;
  transition: var(--main-transition);
  color: var(--text-color-secondary);
    border-radius: 0.15rem;
    border: 1px solid transparent;

  ${({transparent}) => transparent && css`
    border: 1px solid black;
  color: var(--text-color-primary);

  `}

  &:hover {
    background: var(
    --color-${({ primary , secondary, transparent }) => (primary ? "primary" : secondary ? "secondary" : transparent ? "transparent" : "primary")}-hover);
    
  }
  margin: 5px 15px ;
  
`;
