import React,{useState} from "react";
import styled from "styled-components";
import { MdOutlineDelete } from "react-icons/md";
import { removeCart } from "../Redux/cartRedux";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const CartContainer = styled.div`
  margin-bottom: 20px;
`;
const CartDetails = styled.div`
  display: flex;
`;
const Image = styled.img`
  max-width: 100px;
  margin: 0 20px;
`;
const CartInfo = styled.div`
  margin: 0 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProductNameContainer = styled.div`
  margin: auto 0;
  flex: 1;
  max-width: 400px;
`;
const ProductName = styled.div`
  font-size: 20px;
  margin: auto 0;
`;
const ProductPrice = styled.div`
  margin: auto 0;
`;
const ProductQuantity = styled.div`
  margin: auto 0;
`;
const SubTotal = styled.div`
  margin: auto 0;
`;
const SelectedProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  margin: 10px 0;
`;
const RemoveCart = styled.button`
  background-color: white;
  height: 40px;
  border: none;
  cursor: pointer;
`;

function Cart({ cart }) {
  const [quantity, setQuantity] = useState(cart.quantity)
  console.log("cart", cart);

  const dispatch = useDispatch();

  const DeleteCartHandler = (cart) => {
    const { totalPrice, _id } = cart;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      allowOutsideClick: () => !Swal.isLoading(),
      preConfirm: () => {
        dispatch(removeCart({ _id, totalPrice }));
      },
    });
  };

  return (
    <CartContainer>
      <CartDetails>
        <Image src={cart.img} />
        <CartInfo>
          <ProductNameContainer>
            <ProductName>{cart.title}</ProductName>
            <SelectedProductColor bgColor={cart.color}> </SelectedProductColor>
          </ProductNameContainer>
          <ProductPrice> ₹ {cart.price} </ProductPrice>
          <ProductQuantity>
            <select 
            value={quantity} 
            onChange={(e) =>
              setQuantity(Number(e.target.value))
            }
            >
              {[...Array(cart.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </ProductQuantity>
          <SubTotal> ₹ {cart.totalPrice} </SubTotal>
          <RemoveCart onClick={() => DeleteCartHandler(cart)}>
            {" "}
            <MdOutlineDelete size={22} color="red" />{" "}
          </RemoveCart>
        </CartInfo>
      </CartDetails>
    </CartContainer>
  );
}

export default Cart;
