import { formatCurrency } from "../utilities/formatCurrency";
import { Card } from "react-bootstrap";
import "../App.css";
import { useShoppingCart } from "../context/ShoppingCartContext";
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        // src={imgUrl}
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted"> {formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button
              className="w-100 bg-primary "
              onClick={() => increaseCartQuantity(id)}
            >
              + Add To Card{" "}
            </button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <button
                  className="bg-primary"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </button>
                <div>
                  <span className="fs-3">{quantity}</span> in card
                </div>
                <button
                  className="bg-primary"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-danger mt-4"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItem;
