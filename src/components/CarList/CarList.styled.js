import styled from "@emotion/styled";

export const CardListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CardItemStyle = styled.li`
  display: block;
  position: relative;
  max-width: 274px;
  margin-bottom: 50px;
`;

export const ButtonFavoriteStyle = styled.button`
  position: absolute;
  z-index: 1;
  top: 14px;
  right: 14px;
  background-color: transparent;
`;

export const IconFavoriteStyle = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${(props) => (props.isFavorite ? "#3470FF" : "#fff")};

  fill: ${(props) => (props.isFavorite ? "#3470FF" : "transparent")};
  border: 1px solid transparent;
`;
