// import React from "react";
import { Favorite } from "../Favorite/Favorite";
import {
  HeaderContainer,
  LogoLinkStyle,
  IconFavoriteStyle,
} from "./Header.styled";
import sprite from "../../images/sprite.svg#sprite";
export const Header = ({ getFavorite }) => {
  return (
    <HeaderContainer>
      <LogoLinkStyle href="url">Rent-n-go</LogoLinkStyle>
      <a href="url">
        <IconFavoriteStyle>
          <use href={`${sprite}#icon-normal-1`}></use>
        </IconFavoriteStyle>
        <Favorite getFavorite={getFavorite} />
      </a>
    </HeaderContainer>
  );
};
