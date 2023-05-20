import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "../../../components/Product";
import MoonLoader from "react-spinners/MoonLoader";
import { PublicRequest } from "../../../api/Api";
import { PriceOrder } from "./const";
import SelectBox from "../../../components/SelectBox";

const filterSelectBox = {
  multiValue: (baseStyles) => ({
    ...baseStyles,
    border: "0.3px solid rgba(0, 0, 0, 0.5)",
    backgroundColor: "#2f2f2f",
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

const PopularProductsCntainer = styled.div`
  background-color: #373737;
  margin-top: 2px;
  padding:0 0 40px 0;
`;
const PopularProductswrapper = styled.div`
  max-width: 1300px;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 1500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SortingTitle = styled.div`
  margin: 0 10px;
  color: #ababab;
`;
const SortingDropDown = styled.div``;

const Sorting = styled.div`
  /* border: 1px solid white; */
  height: 50px;
  margin-bottom: 20px;
  background-color: #3d3d3d;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SortingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Loader = styled.div``;

function PopularProducts({ popularProduct, categoryList }) {
  const [limitedEditionProduct, setLimitedEditionProduct] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [selectedSortingOrder, setSelectedSortingOrder] = useState([]);

  const GetLimitedEditionProduct = async () => {
    setIsFetching(true);
    let params = {};
    params.category = "limitedEdition";
    await PublicRequest.get("/product", {
      params,
    })
      .then((response) => {
        setLimitedEditionProduct(response.data.products);
        console.log(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  useEffect(() => {
    GetLimitedEditionProduct();
  }, []);

  useEffect(() => {
    if(selectedSortingOrder?.option === "Newest"){
      setLimitedEditionProduct((prev)=>[...prev].sort((a,b)=> a.createdAt - b.createdAt))
    }else if(selectedSortingOrder?.option === "Price(asc)"){
      setLimitedEditionProduct((prev)=>[...prev].sort((a,b)=> a.price - b.price))
    }else{
      setLimitedEditionProduct((prev)=>[...prev].sort((a,b)=> b.price - a.price))
    }
  }, [selectedSortingOrder]);


  return (
    <>
      {isFetching ? (
        <Loader>
          {" "}
          <MoonLoader />{" "}
        </Loader>
      ) : (
        <PopularProductsCntainer>
          <Sorting>
            <SortingWrapper>
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
                      primary: "#2f2f2f",
                    },
                  })}
                />
              </SortingDropDown>
            </SortingWrapper>
          </Sorting>
          <PopularProductswrapper>
            {limitedEditionProduct?.map((ProductData) => {
              return (
                <Product
                  ProductData={ProductData}
                  popularProduct={popularProduct}
                />
              );
            })}
          </PopularProductswrapper>
        </PopularProductsCntainer>
      )}
    </>
  );
}

export default PopularProducts;
