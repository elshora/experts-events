"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const MainNavbar = () => {
  const pathname = usePathname();
  return (
    <nav className="navbar navbar-expand navbar-light bg-light sticky-top">
      <div className="container-fluid text-light">
        <Link className={`navbar-brand`} href={"/#"}>
          <Image src={"/images/logo.png"} height={35} width={35} alt="logo" />
        </Link>
        <ul className={"navbar-nav me-auto"}>
          <li className={`nav-item`}>
            <Link
              className={`nav-link ${
                pathname.includes("experts") || pathname.includes("events")
                  ? ""
                  : "active"
              }`}
              href={"/#"}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                pathname.includes("events") ? "active" : ""
              }`}
              href={"/events"}
            >
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                pathname.includes("experts") ? "active" : ""
              }`}
              href={"/experts"}
            >
              expert
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavbar;
