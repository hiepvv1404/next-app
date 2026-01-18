"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathName = usePathname();
  return (
    <>
      <h3>Menu</h3>
      <ul className="nav flex-column nav-pills">
        <li className="nav-item">
          {/* pre fetch o client => chuyeen trang ko load lai*/}
          <Link
            href="/"
            className={clsx("nav-link", { active: pathName === "/" })}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/products"
            className={clsx("nav-link", { active: pathName === "/products" })}
          >
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/posts"
            className={clsx("nav-link", { active: pathName === "/posts" })}
          >
            Posts
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/about"
            className={clsx("nav-link", { active: pathName === "/about" })}
          >
            About
          </Link>
        </li>
      </ul>
    </>
  );
};
export default Menu;
