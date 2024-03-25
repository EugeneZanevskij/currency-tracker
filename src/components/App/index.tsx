import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppLayout } from "@layouts/AppLayout";
import { NAVBAR } from "../../constants/nav";
import { ROUTES } from "../../constants/routes";
import { NotFound } from "@pages/Notfound";
import { THEME } from "../../constants/themes";
import { ThemeContext } from "../../store";

export function App() {
	const { theme } = useContext(ThemeContext);
	return (
		<ThemeProvider theme={THEME[theme]}>
			<Routes>
				<Route element={<AppLayout />}>
					{Object.values(NAVBAR).map((item) => {
						return (
							<Route
								key={item.link}
								path={item.link}
								element={<item.element />}
							/>
						);
					})}
				</Route>
				<Route path={ROUTES.NOTFOUND} element={<NotFound />} />
			</Routes>
		</ThemeProvider>
	);
}
