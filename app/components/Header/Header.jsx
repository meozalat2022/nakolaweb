import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.css";
import Image from "next/image";
const Header = () => {
  return (
    <header>
      <div>
        <div className="md:justify-around justify-center hidden md:flex items-center">
          <div>
            <img src="/logo_.png" className="w-40 h-40" alt="logo" />
          </div>
          <div>
            <img
              src="/banner.png"
              className="w-40 h-40 hidden md:block"
              alt="Banner"
            />
          </div>
        </div>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
