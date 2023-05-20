import React from "react";
import styled from "styled-components";
// import logo from "../asserts/noline.png";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/userRedux";
import basket from "../asserts/basket.png";
import Swal from "sweetalert2";

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: white;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  padding: 5px;
  margin: 5px 10px;
  color: white;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const Center = styled.div`
  flex: 1;
  max-width: 400px;
  height: fit-content;
  display: flex;
  position: relative;
  margin-left: 20px;
`;
const SearchIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;
const Input = styled.input`
  border: 1px solid #ebe9e6;
  border-radius: 5px;
  width: 100%;
  padding: 10px 40px 10px 10px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 10px;
`;
const HeaderLogin = styled.div`
  height: fit-content;
  border-right: 1px solid #ebe9e6;
  padding: 1px 10px;
  font-size: 13px;
  /* margin: 0 10px 0 10px; */
  cursor: pointer;
  color: ${(props) => (props.pathname ? "#003044" : "gray")};
  font-weight: ${(props) => props.pathname && "600"};
`;
const CartNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderRightIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  padding: 0 5px;
  background-color: ${(props) => props.pathname && "#e2f3f5"};
`;

const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #f59607;
  color: white;
  border-radius: 50%;
  transition: all o.5s ease-out;
`;

const CartNav = styled.span`
  margin-left: 3px;
  font-weight: 700;
`;

function Header() {
  const { cart, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(cart);
  console.log(user);

  let { pathname } = useLocation();

  const LogoutHandler = () => {
    if (user.currentUser) {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to logout",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Logout",
        allowOutsideClick: () => !Swal.isLoading(),
        preConfirm: () => {
          dispatch(logout());
        },
      });
    }
  };

  return (
    <NavContainer>
      <Wrapper>
        <Left>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Logo
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo_small.svg?v=1682421543"
              alt=""
            />
          </Link>
          <Center>
            <Input placeholder="Search for a Category, Brand or Product" />
            <SearchIcon>
              <CiSearch size={25} color="#f59607" />
            </SearchIcon>
          </Center>
        </Left>

        <Right>
          {/* <Link
            to="/products"
            style={{ textDecoration: "none", color: "black" }}
          >
            <HeaderLogin pathname={pathname === "/products" && true}>
              Products
            </HeaderLogin>
          </Link> */}
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <HeaderLogin onClick={LogoutHandler}>
              {!user.currentUser ? "Login/Register" : "Logout"}{" "}
            </HeaderLogin>
          </Link>
          <Link to="/carts" style={{ textDecoration: "none", color: "black" }}>
            <CartNavContainer>
              <HeaderRightIcons pathname={pathname === "/carts" && true}>
                {cart.quantity > 0 && <Count> {cart.quantity} </Count>}
                <FiShoppingCart size={33} />
              </HeaderRightIcons>
              <CartNav>Cart</CartNav>
            </CartNavContainer>
          </Link>
        </Right>
      </Wrapper>
    </NavContainer>
  );
}

export default Header;
