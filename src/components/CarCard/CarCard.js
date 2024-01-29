import React from "react";

import {
  CarBaseInfoStyle,
  ContainerTitleStyle,
  TitleStyleSpan,
  ImageStyle,
  Container,
  ButtonStyle,
  CarCardStyle,
} from "./CarCard.styled";

export const CarCard = ({
  car: {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    functionalities,
  },
  onLearnMoreClick,
}) => {
  return (
    <CarCardStyle>
      <div>
        <Container>
          <ImageStyle src={img} alt={make} />
        </Container>
        <ContainerTitleStyle>
          <h2>
            {make}
            <TitleStyleSpan> {model}</TitleStyleSpan>, {year}
          </h2>
          <p>{rentalPrice}</p>
        </ContainerTitleStyle>
        <CarBaseInfoStyle>
          {address} | {rentalCompany} | {type} | {model} | {id} |{" "}
          {functionalities[0]}
        </CarBaseInfoStyle>
      </div>
      <ButtonStyle type="button" onClick={onLearnMoreClick}>
        Learn more
      </ButtonStyle>
    </CarCardStyle>
  );
};
