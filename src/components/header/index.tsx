import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logoIgnite from "@/assets/logo-ignite.svg";
import { HeaderContainer } from "./styles";

export function Header() {
	return (
		<HeaderContainer>
			<img src={logoIgnite} alt="Logo Ignite" />

			<nav>
				<NavLink to="/" title="Timer">
					<Timer size={24} />
				</NavLink>
				<NavLink to="/history" title="History">
					<Scroll size={24} />
				</NavLink>
			</nav>
		</HeaderContainer>
	);
}
