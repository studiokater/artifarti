// Core
import Link from "next/link";

// Assets
import { NeueMontreal } from "@/styles/fonts";

// Components
import { NavMenu } from "../NavMenu/NavMenu";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 my-8 grid w-full grid-cols-3 border-b-[1px] border-solid bg-background py-4">
      <div className="my-auto">
        <Link href="/">
          <h4 className={`${NeueMontreal.className} cursor-pointer`}>
            Artifarti.
          </h4>
        </Link>
      </div>
      <NavMenu />
    </header>
  );
};

export default Header;
