/** @jsx h */
import { PageProps } from "https://deno.land/x/fresh@1.0.1/server.ts";
import { h } from "preact";
import Navbar from "../islands/Navbar.tsx";
import Socials from "./Socials.tsx";

interface HeaderProps {
  is_shop: boolean;
}
export function Header(props: HeaderProps) {
  return (
    <div>
      <Navbar is_shop={props.is_shop}/>
      <Socials />
    </div>
  );
}
