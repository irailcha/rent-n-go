import React from "react";
import sprite from "../../images/sprite.svg";
import {
  ContainerModal,
  IconCloseStyle,
  ModalBackDrop,
  ButtonCloseStyle,
} from "./ModalCarInfo.styled";

export const ModalCarInfo = ({ onClose }) => {
  return (
    <ModalBackDrop>
      <ContainerModal>
        <ButtonCloseStyle onClick={onClose}>
          <IconCloseStyle>
            <use href={`${sprite}#icon-x-1`}></use>
          </IconCloseStyle>
        </ButtonCloseStyle>
        <div></div>
      </ContainerModal>
    </ModalBackDrop>
  );
};
