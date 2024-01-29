import React, { useState } from "react";
import { Formik } from "formik";
import {
  LabelStyleForm,
  FormStyle,
  MieleageStyleForm,
  ButtonStyle,
  FieldStyleMileage,
  FieldStyleMark,
  FieldStylePrice,
} from "./SearchForm.styled";

export const SearchForm = ({ onSubmit, carBrands }) => {
  const [searchParams, setSearchParams] = useState({
    brand: "",
    price: "",
    mileage: { from: "", to: "" },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleSubmit = (values, actions) => {
    console.log(searchParams);
    // Тут ви можете викликати onSubmit і передати searchParams
    onSubmit(searchParams);
    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={searchParams} onSubmit={handleSubmit}>
        <FormStyle autoComplete="off">
          <LabelStyleForm htmlFor="brand">
            Car brand
            <FieldStyleMark
              as="select"
              name="brand"
              placeholder="Enter the text"
              onChange={handleChange}
              value={searchParams.brand}
            >
              <option
                value=""
                disabled={
                  !searchParams.price &&
                  !searchParams.mileage.from &&
                  !searchParams.mileage.to
                }
              >
                Select a car brand
              </option>
              {carBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </FieldStyleMark>
          </LabelStyleForm>
          <LabelStyleForm htmlFor="price">
            Price / 1 hour
            <FieldStylePrice
              type="number"
              name="price"
              placeholder="To $"
              onChange={handleChange}
              value={searchParams.price}
              disabled={
                !searchParams.brand &&
                !searchParams.mileage.from &&
                !searchParams.mileage.to
              }
            />
          </LabelStyleForm>

          <LabelStyleForm htmlFor="mileage">
            Сar mileage / km
            <MieleageStyleForm>
              <FieldStyleMileage
                left
                type="number"
                name="mileage.from"
                placeholder="From "
                onChange={handleChange}
                value={searchParams.mileage.from}
                disabled={
                  !searchParams.brand &&
                  !searchParams.price &&
                  !searchParams.mileage.to
                }
              />
              <FieldStyleMileage
                type="number"
                name="mileage.to"
                placeholder="To"
                onChange={handleChange}
                value={searchParams.mileage.to}
                disabled={
                  !searchParams.brand &&
                  !searchParams.price &&
                  !searchParams.mileage.from
                }
              />
            </MieleageStyleForm>
          </LabelStyleForm>
          <ButtonStyle type="submit">Search</ButtonStyle>
        </FormStyle>
      </Formik>
    </div>
  );
};
