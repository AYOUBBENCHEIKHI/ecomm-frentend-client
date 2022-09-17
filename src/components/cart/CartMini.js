import React from "react";

const CartMini = ({ item, removeItem, updateItemQuantity }) => {
  return (
    <div>
      <div className="flex items-center border border-gray-300 dark:border-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 -mx-8 px-6 py-5">
        <div className="flex w-2/5">
          <div className="  md:w-20 ">
            <img className="h-24" src={`http://localhost:8000/imageProducts/${item.img_url}`} alt="" />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm">{item.title}</span>
            <span className="text-red-500 text-xs">{item.title}</span>
            <button
              onClick={() => removeItem(item.id)}
              className="font-semibold hover:text-red-500 text-red-700 text-xs"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center  ">
          <svg
            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            className="fill-current  text-gray-600 w-2 md:w-3 dark:text-gray-50"
            viewBox="0 0 448 512"
          >
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>

          <input
            className="mx-2 border text-center w-8"
            type="text"
            value={item.quantity}
          />

          <svg
            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            className="fill-current text-gray-600 w-2 md:w-3 dark:text-gray-50"
            viewBox="0 0 448 512"
          >
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </div>
        <span className="text-center w-1/5 font-semibold text-sm dark:text-gray-50">
          ${item.price}
        </span>
        <span className="text-center w-1/5 font-semibold text-sm dark:text-gray-50">
          ${item.price * item.quantity}
        </span>
      </div>
    </div>
  );
};

export default CartMini;
