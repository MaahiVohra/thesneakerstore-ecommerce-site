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
				<Link href="/">
					<Image
						src={"/logo.png"}
						height={50}
						width={175}
						alt="Logo"
						style={{
							cursor: "pointer",
						}}
					/>
				</Link>
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
					<button type="button" className="signin-btn">
						<a href="/sign-in">Login</a>
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
