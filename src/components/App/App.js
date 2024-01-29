// App.jsx

import React, { useState, useEffect } from "react";
import { ModalCarInfo } from "../ModalCarInfo/ModalCarInfo";
import { SearchForm } from "../SearchForm/SearchForm";
import { CarList } from "../CarList/CarList";
import { Header } from "../Header/Header";
import { Loader } from "../helpers/Loader";
import { MainContainer } from "./App.styled";
import { fetchAdverts, fetchAdvertById, fetchCarBrands } from "../api";
import { useToggle } from "../../hooks/useToggle";

const getFavoriteAdverts = () => {
  const savedAdverts = localStorage.getItem("favoriteAdverts");
  if (savedAdverts !== null) {
    return JSON.parse(savedAdverts);
  }
};

const App = () => {
  const [data, setData] = useState([]);
  const [dataId, setDataId] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [favoriteAdvertList, setFavoriteAdvertList] =
    useState(getFavoriteAdverts);
  const [carMark, setCarMark] = useState([]);

  const [filteredData, setFilteredData] = useState({
    brand: "",
    price: "",
    mileage: { from: "", to: "" },
  });
  const { isOpen, open, close } = useToggle(false);

  const [isFavorite] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await fetchAdverts();
        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchId = async () => {
      try {
        setIsLoading(true);
        console.log("dataId:", dataId); // Log dataId to check its structure
        const result = await fetchAdvertById(dataId);
        console.log(result);
        setDataId(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchId();
  }, [dataId]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setIsLoading(true);
        const result = await fetchCarBrands();
        setCarMark(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBrands();
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteAdverts", JSON.stringify(favoriteAdvertList));
  }, [favoriteAdvertList]);

  const handleSearchSubmit = (searchParams) => {
    const filteredAds = data.filter((ad) => {
      const brandMatches =
        !searchParams.brand || ad.make === searchParams.brand;

      const priceMatches =
        !searchParams.price || (ad.price && ad.price <= searchParams.price);

      const mileageMatches =
        (!searchParams.mileage.from ||
          ad.mileage >= searchParams.mileage.from) &&
        (!searchParams.mileage.to || ad.mileage <= searchParams.mileage.to);

      return brandMatches && priceMatches && mileageMatches;
    });

    setFilteredData(filteredAds);
  };

  function changeFavorite(id) {
    // Перевіряємо, чи оголошення вже в обраному списку
    const isAlreadyFavorite = favoriteAdvertList.some(
      (item) => item.fetchId === id
    );

    if (isAlreadyFavorite) {
      console.log(id);
      setFavoriteAdvertList((prevList) =>
        prevList.filter((item) => item.fetchId !== id)
      );
    } else {
      // Якщо не в обраному списку, додаємо його
      setFavoriteAdvertList((prevList) => [
        ...prevList,
        { fetchId: id, isFavorite: true },
      ]);
    }
  }

  return (
    <>
      <Header getFavorite={favoriteAdvertList} />
      <MainContainer>
        <SearchForm carBrands={carMark} onSubmit={handleSearchSubmit} />

        {isLoading && !isError && <Loader />}
        {data && (
          <CarList
            onClick={open}
            fetchData={filteredData.length > 0 ? filteredData : data}
            changeFavorite={(id) => changeFavorite(id)}
            isFavorite={isFavorite}
            favoriteAdvertList={favoriteAdvertList}
          />
        )}
        {isOpen && <ModalCarInfo isOpen={isOpen} onClose={close} />}
      </MainContainer>
    </>
  );
};

export default App;
