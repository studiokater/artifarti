"use client";

// Core
import Link from "next/link";

// Assets
import { NeueMontreal } from "@/styles/fonts";

// Components
import { NavMenu } from "../NavMenu/NavMenu";

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
import { usePathname } from "next/navigation";

type HeaderProps = {
  mobile?: boolean;
};

export const Header = ({ mobile }: HeaderProps) => {
  const { theme } = useTheme();
  const currentPath = usePathname();

  return (
    // <header className="sticky top-0 z-10 my-8 grid w-full grid-cols-3 border-b-[1px] border-solid bg-background py-4">
    <header className="sticky top-0 z-10 my-8 grid w-full grid-cols-3 bg-background py-4">
      <div className="my-auto">
        <Link href="/">
          <h4 className={`${NeueMontreal.className} cursor-pointer`}>
            Artifarti.
          </h4>
        </Link>
      </div>
      {currentPath !== "/authenticate" && (
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
      )}
    </header>
  );
};

export default Header;
