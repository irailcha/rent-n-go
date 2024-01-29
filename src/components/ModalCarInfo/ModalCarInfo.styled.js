import styled from "@emotion/styled";

export const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 100;
`;

export const ContainerModal = styled.div`
  position: absolute;
  display: block;

  z-index: 111;
  width: 541px;
  min-height: 300px;
  background-color: #ffffff;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 24px;
  padding: 40px;
  transform: 250ms cubic-bezier(0, 0.99, 0.99, 0.01);
`;

export const IconCloseStyle = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #000000;
`;
export const ButtonCloseStyle = styled.button`
  background-color: transparent;
  position: absolute;
  top: 16px;
  right: 16px;
`;
