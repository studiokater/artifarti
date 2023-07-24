"use client";

// Assets
import {
  SpaceGroteskMedium,
  SpaceGroteskLight,
  NeueMontreal,
} from "@/styles/fonts";

// Components
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { DarkModeButton } from "../../input/DarkModeButton/DarkModeButton";
import { Button } from "../../ui/button";
import { Input } from "@/components/ui/input";
import { BiSearch, BiUser, BiShoppingBag } from "react-icons/bi";

export const Header = () => {
  return (
    <header
      className={`header my-8 grid w-full grid-cols-3 border-b-[1px] pb-2 border-solid sticky top-0 bg-background`}
    >
      <div className="my-auto">
        <h2 className={`${NeueMontreal.className} cursor-pointer`}>
          Artifarti.
        </h2>
      </div>
      <div className="relative flex items-center justify-center">
        <BiSearch className="pointer-events-none absolute left-4" />
        <Input
          className="h-14 w-full rounded-full pl-12"
          placeholder="What are you looking for?"
        />
      </div>
      <NavigationMenu className="my-auto ml-auto flex">
        <NavigationMenuList className="space-x-4">
          <NavigationMenuItem className="flex flex-col justify-center items-center">
            <Button className="h-14 w-14 rounded-full" aria-label="Shopping cart" aria-labelledby="shopping-cart">
              <BiShoppingBag />
            </Button>
            <span id="shopping-cart" className="text-xs hidden">Shopping cart</span>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button className="h-14 w-14 rounded-full" aria-label="User settings" aria-labelledby="user-settings">
              <BiUser />
            </Button>
            <span id="user-settings" className="text-xs hidden">User settings</span>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <DarkModeButton />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
