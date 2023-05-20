import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "../../components/Product";
import { PriceOrder, categoryList } from "./components/Const";
import Announcement from "../../components/Announcement";
import SelectBox from "../../components/SelectBox";
import ModalComponent from "../../components/ModalComponents";
import FilterComponent from "./components/FilterComponent";
import { useLocation } from "react-router-dom";
import { PublicRequest } from "../../api/Api";
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import MoonLoader from "react-spinners/MoonLoader";

const ProductListContainer = styled.div``;

const Filter = styled.div`
  padding: 0 20px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;
const FilterBtn = styled.button`
  background-color: white;
  padding: 10px;
  font-size: 20px;
  border: 2px solid black;
`;
const Sorting = styled.div`
  display: flex;
  align-items: center;
`;
const SortingTitle = styled.div`
  margin: 0 10px;
`;
const SortingDropDown = styled.div``;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 10px;
  @media screen and (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 500px);
`;

const filterSelectBox = {
  multiValue: (baseStyles) => ({
    ...baseStyles,
    border: "0.3px solid rgba(0, 0, 0, 0.5)",
    backgroundColor: "#F2F2F2",
    borderRadius: "20px",
  }),
  dropdownIndicator: () => ({
    color: "black",
    margin: "0 7px",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

//  const styles = {position:"relative",backgroundColor:"white" ,maxWidth: "400px"}

function Products() {
  const [selectedSortingOrder, setSelectedSortingOrder] = useState();
  const [products, setProducts] = useState([]);
  const [FilterModal, setFilterModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {state} = useLocation();

  const [categoryName, setCategoryName] = useState("");

  const GetProductHandler = async () => {
    setIsLoading(true);

    let params = {};
    if (categoryName) {
      params.category = categoryName;
    } else if (state.data) {
      params.category = state.data;
    }else{
      params = {}
    }

    try {
      const getProducts = await PublicRequest.get("/product", {
        params,
      });
      setProducts(getProducts.data.products);
      if (getProducts.data.products) {
        setFilterModal(false);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetProductHandler();
  }, [categoryName]);

  useEffect(() => {
    if (selectedSortingOrder?.option === "Newest") {
      setProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (selectedSortingOrder?.option === "Price(asc)") {
      setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [selectedSortingOrder]);


  return (
    <>
      <Header/>
      <ProductListContainer>
        <Announcement
          offerMessage="Super Deal! Free Shopping on Order Over $100"
          bgColor="#FFD81C"
          textColor="black"
        />
        <Filter>
          <filterBtnWrap>
            <FilterBtn onClick={() => setFilterModal(true)}>
              CATEGORIES
            </FilterBtn>
          </filterBtnWrap>
          <Sorting>
            <SortingTitle> SORT PRODUCTS : </SortingTitle>
            <SortingDropDown>
              <SelectBox
                options={PriceOrder}
                getOptionLabel={(val) => val.option}
                getOptionValue={(val) => val.option}
                styles={filterSelectBox}
                value={selectedSortingOrder}
                onChange={(options) => setSelectedSortingOrder(options)}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "#E6F4F1",
                    primary: "#003044",
                  },
                })}
              />
            </SortingDropDown>
          </Sorting>
        </Filter>
        {!isLoading ? (
          <ProductList>
            {products &&
              products?.map((ProductData) => (
                <Product
                  key={`${ProductData._id}_${ProductData.title}`}
                  ProductData={ProductData}
                />
              ))}
          </ProductList>
        ) : (
          <LoaderContainer>
            <MoonLoader />
          </LoaderContainer>
        )}
        {FilterModal && (
          <ModalComponent callback={() => setFilterModal(false)}>
            <FilterComponent
              categoryList={categoryList}
              setCategoryName={setCategoryName}
            />
          </ModalComponent>
        )}
      </ProductListContainer>
      <Footer />
    </>
  );
}

export default Products;
