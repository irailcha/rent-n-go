import React from "react";
import { CarCard } from "../CarCard/CarCard";

import sprite from "../../images/sprite.svg#sprite";
import {
  CardListStyle,
  CardItemStyle,
  ButtonFavoriteStyle,
  IconFavoriteStyle,
} from "./CarList.styled";

export const CarList = ({
  onClick,
  fetchData,
  changeFavorite,
  isFavorite,
  favoriteAdvertList,
}) => {
  const handleFavoriteClick = (id) => {
    changeFavorite(id, isFavorite);
  };

  return (
    <CardListStyle>
      {Array.isArray(fetchData) &&
        fetchData.map((data) => {
          const isAdvertFavorite = favoriteAdvertList.some(
            (item) => item.fetchId === data.id && item.isFavorite
          );

          return (
            <CardItemStyle
              key={data.id}
              className={isAdvertFavorite ? "favorite" : ""}
            >
              <ButtonFavoriteStyle onClick={() => handleFavoriteClick(data.id)}>
                <IconFavoriteStyle isFavorite={isAdvertFavorite}>
                  <use href={`${sprite}#icon-normal-1`}></use>
                </IconFavoriteStyle>
              </ButtonFavoriteStyle>
              <CarCard car={data} onClick={onClick} />
            </CardItemStyle>
          );
        })}
    </CardListStyle>
  );
};
