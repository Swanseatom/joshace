/** @jsx h */
import { h } from "preact";
import { useRef } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { apply, tw } from "@twind";
import { animation, css } from "twind/css";
import IconCart from "@/components/IconCart.tsx";
import {
  CartData,
  formatCurrency,
  removeFromCart,
  useCart,
} from "@/utils/data.ts";
import { PageProps } from "https://deno.land/x/fresh@1.0.1/server.ts";

// Lazy load a <dialog> polyfill.
// @ts-expect-error HTMLDialogElement is not just a type!
if (IS_BROWSER && window.HTMLDialogElement === "undefined") {
  await import(
    "https://raw.githubusercontent.com/GoogleChrome/dialog-polyfill/5033aac1b74c44f36cde47be3d11f4756f3f8fda/dist/dialog-polyfill.esm.js"
  );
}

declare global {
  interface HTMLDialogElement {
    showModal(): void;
    close(): void;
  }
}

const slideRight = animation("0.4s ease normal", {
  from: { transform: "translateX(100%)" },
  to: { transform: "translateX(0)" },
});

const slideBottom = animation("0.4s ease normal", {
  from: { transform: "translateY(100%)" },
  to: { transform: "translateY(0)" },
});

const backdrop = css({
  "&::backdrop": {
    background: "rgba(0, 0, 0, 0.5)",
  },
});

interface CartProps {
  is_shop: boolean;
}

export default function Cart(props: CartProps) {
  const { data, error } = useCart();

  const ref = useRef<HTMLDialogElement | null>(null);

  const onDialogClick = (e: MouseEvent) => {
    if ((e.target as HTMLDialogElement).tagName === "DIALOG") {
      ref.current!.close();
    }
  };

  const onClickButton = () => {
    if (props.is_shop) {
      ref.current!.showModal()
    } else {
      window.location = "/shop/merch";
    }
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <button
        onClick={onClickButton}
        class={tw`flex items-center gap-2 items-center border-2 border-gray-800 rounded-full px-5 py-1 font-semibold text-white bg-gray-800 hover:bg-white hover:text-gray-800 hover:animate-pulse transition-colors duration-300`}
      >
        { props.is_shop ? <div><IconCart />{data?.lines.nodes.length ?? "0"}</div> : <p>Merch</p>}
        
      </button>
      <dialog
        ref={ref}
        class={tw`bg-transparent p-0 m-0 pt-[50%] sm:pt-0 sm:ml-auto max-w-full sm:max-w-lg w-full max-h-full h-full ${slideBottom} sm:${slideRight} ${backdrop}`}
        onClick={onDialogClick}
      >
        <CartInner cart={data} />
      </dialog>
    </div>
  );
}

function CartInner(props: { cart: CartData | undefined }) {
  const corners = apply`rounded(tl-2xl tr-2xl sm:(tr-none bl-2xl))`;
  const card =
    tw`py-8 px-6 h-full bg-white ${corners} flex flex-col justify-between`;
  const { data: cart } = useCart();

  const checkout = (e: Event) => {
    e.preventDefault();
    if (cart) {
      location.href = cart.checkoutUrl;
    }
  };

  const remove = (itemId: string) => {
    if (cart) {
      removeFromCart(cart.id, itemId);
    }
  };

  return (
    <div class={card}>
      <div class={tw`flex justify-between`}>
        <h2 class={tw`text-lg font-medium text-gray-900`}>Shopping Cart</h2>
        <button
          class={tw`py-1`}
          onClick={(e) => {
            (e.target as HTMLButtonElement).closest("dialog")!.close();
          }}
        >
          <svg
            class={tw`w-6 h-6 fill-current text-gray-600`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </div>
      {props.cart && (
        <div class={tw`flex-grow-1 my-4`}>
          {props.cart.lines.nodes.length === 0
            ? <p class={tw`text-gray-700`}>There are no items in the cart.</p>
            : (
              <ul role="list" class={tw`-my-6 divide-y divide-gray-200`}>
                {props.cart.lines.nodes.map((line) => (
                  <li class={tw`flex py-6`}>
                    <div
                      class={tw`h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200`}
                    >
                      <img
                        src={line.merchandise.image.url}
                        alt={line.merchandise.image.altText ??
                          line.merchandise.product.title}
                        class={tw`h-full w-full object-cover object-center`}
                      />
                    </div>
                    <div class={tw`ml-4 flex flex-1 flex-col`}>
                      <div>
                        <div
                          class={tw`flex justify-between text-base font-medium text-gray-900`}
                        >
                          <h3>{line.merchandise.product.title}</h3>
                          <p class={tw`ml-4`}>
                            {formatCurrency(line.estimatedCost.totalAmount)}
                          </p>
                        </div>
                        <p class={tw`mt-1 text-sm text-gray-500`}>
                          {line.merchandise.title !==
                              line.merchandise.product.title
                            ? line.merchandise.title
                            : ""}
                        </p>
                      </div>
                      <div
                        class={tw`flex flex-1 items-end justify-between text-sm`}
                      >
                        <p class={tw`text-gray-500`}>
                          Quantity <strong>{line.quantity}</strong>
                        </p>

                        <div class={tw`flex`}>
                          <button
                            type="button"
                            class={tw`font-medium`}
                            onClick={() => remove(line.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
        </div>
      )}
      {props.cart && (
        <div class={tw`border-t border-gray-200 py-6 px-4 sm:px-6`}>
          <div class={tw`flex justify-between text-lg font-medium`}>
            <p>Subtotal</p>
            <p>{formatCurrency(props.cart.estimatedCost.totalAmount)}</p>
          </div>
          <p class={tw`mt-0.5 text-sm text-gray-500`}>
            Shipping and taxes calculated at checkout.
          </p>
          <div class={tw`mt-6`}>
            <button
              type="button"
              class={tw`w-full bg-gray-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700`}
              disabled={props.cart.lines.nodes.length === 0}
              onClick={checkout}
            >
              Checkout
            </button>
          </div>
          <div
            class={tw`mt-6 flex justify-center text-center text-sm text-gray-500`}
          >
            <p>
              or&nbsp;
              <button
                type="button"
                class={tw`font-medium`}
                onClick={(e) => {
                  (e.target as HTMLButtonElement).closest("dialog")!.close();
                }}
              >
                Continue Shopping <span aria-hidden="true">&rarr;</span>
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
