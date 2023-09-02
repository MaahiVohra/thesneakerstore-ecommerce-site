import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import { ClerkProvider } from "@clerk/nextjs";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ClerkProvider {...pageProps}>
			<StateContext>
				<Layout>
					<Toaster />
					<Component {...pageProps} />
				</Layout>
			</StateContext>
		</ClerkProvider>
	);
}

export default MyApp;
