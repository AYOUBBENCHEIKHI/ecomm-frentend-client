import { useCart } from "react-use-cart";
import CartMini from "./CartMini";

const Cart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
    
  if (isEmpty)
    return (
      <div className="p-20">
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-full md:w-full bg-white dark:bg-gray-800 px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl dark:text-gray-100">Shopping Cart</h1>
              </div>
              <div className="flex mt-10 mb-5">
                <h2 className="font-semibold text-green-600 dark:text-green-700 text-xL uppercase w-2/5">
                  Your cart is empty
                </h2>
              </div>
              <a
                href="/"
                className="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                <svg
                  className="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="p-20">
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-full md:w-full bg-white  dark:bg-gray-700 px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl dark:text-gray-100">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl dark:text-gray-50">
                {totalUniqueItems} Items
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs  uppercase w-2/5 dark:text-gray-100">
                Product Details
              </h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center dark:text-gray-100">
                Quantity
              </h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center dark:text-gray-100">
                Price
              </h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center dark:text-gray-100">
                Total
              </h3>
            </div>
            {items.map((item) => (
              <div key={item.id}>
                <CartMini
                  item={item}
                  removeItem={removeItem}
                  updateItemQuantity={updateItemQuantity}
                />
              </div>
            ))}
            <a
              href="/"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
            <div className="border-t sm:w-1/4 sm:ml-auto w-full mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase dark:text-gray-50">
                <span>Total cost</span>
                <span>$600</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white dark:text-gray-50 uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
