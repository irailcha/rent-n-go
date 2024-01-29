import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Form, Field } from "formik";

const borderColors = {
  normal: "transparent",
  withBorder: "rgba(138, 138, 137, 0.2)",
};

export const LabelStyleForm = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #8a8a89;
`;

export const FormStyle = styled(Form)`
  display: flex;
  gap: 18px;
  margin-bottom: 50px;
  justify-content: center;
  align-items: flex-end;
`;

export const MieleageStyleForm = styled.div`
  display: flex;
`;

export const ButtonStyle = styled.button`
  display: block;
  border-radius: 12px;
  padding: 0 44px;
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  line-height: 14px;
  background-color: #3470ff;
  height: 48px;
  color: #ffffff;
  :hover {
    background-color: #0b44cd;
  }
`;

export const FieldStyle = styled(Field)``;

const commonFieldStyles = css`
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #121417;
  background-color: #f7f7fb;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 18px;
  border: none;
`;

export const FieldStyleMark = styled(Field)`
  ${commonFieldStyles}
  border-radius: 12px;
  width: 224px;
`;

export const FieldStylePrice = styled(Field)`
  ${commonFieldStyles}
  border-radius: 12px;
  width: 125px;
`;

export const FieldStyleMileage = styled(Field)`
  position: relative;
  ${commonFieldStyles}
  width: 160px;
  border-radius: ${(props) => (props.left ? "12px 0 0 12px" : "0 12px 12px 0")};
  border: 1px solid ${borderColors.withBorder};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: ${borderColors.withBorder};
    left: ${(props) => (props.left ? "100%" : "0")};
  }
`;
