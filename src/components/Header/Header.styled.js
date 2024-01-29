import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  justify-content: space-around;
  position: sticky;
  border-bottom: 1px solid rgba(138, 138, 137, 0.2);
`;

export const LogoLinkStyle = styled.a`
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: #3470ff;

  :hover {
    color: #0b44cd;
  }
`;

export const IconFavoriteStyle = styled.svg`
  width: 18px;
  height: 18px;
  fill: #3470ff;
`;
