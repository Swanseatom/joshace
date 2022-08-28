/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import Cart from "./Cart.tsx";

interface NavbarProps {
  is_shop: boolean;
}
export default function Navbar(props: NavbarProps) {
  return (
    <div
      class={tw`flex items-center sm:justify-center py-8 pl-4`}
    >
      <a href="/">
        <img class={tw`h-8`} src="/logo.png" alt="logo" />
      </a>
      <div class={tw`p-4 absolute right-5`}>
        <Cart is_shop={props.is_shop}/>
      </div>
    </div>
  );
}
