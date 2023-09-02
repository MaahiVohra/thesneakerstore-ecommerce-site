"use client";
import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineShopping } from "react-icons/ai";
import { UserButton, useUser } from "@clerk/nextjs";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
const Navbar: FC = () => {
	const { showCart, setShowCart, totalQuantities } = useStateContext();
	const { isSignedIn } = useUser();
	return (
		<div className="navbar-container">
			<p className="logo">
				<a
					href="/"
					style={{
						display: "flex",
						alignItems: "center",
					}}>
					<Image
						src={"/logo.png"}
						height={50}
						width={55}
						alt="Logo"
					/>
					TheSneakerStore
				</a>
			</p>
			<div className="navbar-right-container">
				<button
					type="button"
					className="cart-icon"
					onClick={() => setShowCart(true)}>
					<AiOutlineShopping />
					<span className="cart-item-qty">{totalQuantities}</span>
				</button>
				{!isSignedIn ? (
					<button
						style={{
							padding: "0.5rem",
							border: "1px solid black",
							borderRadius: "0.5rem",
						}}>
						<a href="/sign-in">Sign In</a>
					</button>
				) : (
					<UserButton afterSignOutUrl="/" />
				)}
			</div>

			{showCart && <Cart />}
		</div>
	);
};
const Logo = () => {
	return <></>;
};
export default Navbar;
