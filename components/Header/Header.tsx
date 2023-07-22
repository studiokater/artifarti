"use client";

// Assets
import { SpaceGroteskMedium, SpaceGroteskLight } from "@/styles/fonts";

// Components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { DarkModeButton } from "../DarkModeButton/DarkModeButton";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="grid w-full grid-cols-3 border-b-[1px] border-solid pt-8">
      <div className="my-auto">
        <h2 className={`${SpaceGroteskMedium.className} cursor-pointer`}>
          ARTBOARD
        </h2>
      </div>
      <Input
        className="my-auto h-12 w-full rounded-full"
        placeholder="Search"
      />
      <NavigationMenu className="my-auto ml-auto flex">
        <NavigationMenuList className="child:pl-2">
          <NavigationMenuItem>
            <Button className="h-12 min-w-[100px] rounded-full">Log in</Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button className="h-12 min-w-[100px] rounded-full">Sign up</Button>
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
