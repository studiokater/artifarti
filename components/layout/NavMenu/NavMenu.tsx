"use client";

// Components
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuTrigger,
  Input,
} from "@/components/shadcn/ui";
import { DarkModeButton } from "@/components/input/DarkModeButton/DarkModeButton";

// Icons
import { BiSearch, BiUser, BiShoppingBag } from "react-icons/bi";

// Constants
import { navLinks } from "@/constants";

// Hooks
import { useTheme } from "next-themes";

type NavMenuProps = {
  mobile?: boolean;
};

export const NavMenu = ({ mobile }: NavMenuProps) => {
  const { theme } = useTheme();

  return (
    <>
      <div className="relative flex items-center justify-center">
        <BiSearch className="pointer-events-none absolute left-4" />
        <Input
          className="h-14 w-full rounded-full pl-12"
          placeholder="What are you looking for?"
        />
      </div>
      <NavigationMenu className="my-auto ml-auto flex">
        <NavigationMenuList className="space-x-4">
          <NavigationMenuItem className="flex flex-col items-center justify-center">
            <NavigationMenuTrigger
              className="h-14 w-14 rounded-full border bg-background"
              aria-label="Shopping cart"
              aria-labelledby="shopping-cart"
            >
              <i>
                <BiShoppingBag />
              </i>
            </NavigationMenuTrigger>

            <NavigationMenuContent className="flex min-w-[200px] flex-col space-y-2 rounded-none border-none p-4 text-xs shadow-none">
              {navLinks.cart.map((link) => (
                <NavigationMenuLink key={link.name} href={link.path}>
                  {link.name}
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
            <span id="shopping-cart" className="hidden text-xs">
              Shopping cart
            </span>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              className="h-14 w-14 rounded-full border bg-background"
              aria-label="User settings"
              aria-labelledby="user-settings"
            >
              <BiUser />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex min-w-[200px] flex-col space-y-2 rounded-none border-none p-4 text-xs shadow-none">
              {navLinks.profile.map((link) => (
                <NavigationMenuLink
                  key={link.name}
                  href={link.path}
                  className={`${
                    theme === "light"
                      ? "hover:bg-black hover:text-white"
                      : "hover:bg-white hover:text-black"
                  } rounded-md px-2 py-1 transition-all duration-200`}
                >
                  {link.name}
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
            <span id="user-settings" className="hidden text-xs">
              User settings
            </span>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <DarkModeButton />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};
