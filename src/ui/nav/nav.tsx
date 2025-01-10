import { CartSummaryNav } from "@/ui/nav/cart-summary-nav";
import { NavMenu } from "@/ui/nav/nav-menu";
import { SearchNav } from "@/ui/nav/search-nav";
import { YnsLink } from "@/ui/yns-link";

export const Nav = async () => {
	return (
		<header className="z-50 py-4 sticky top-0 bg-slate-100/90 backdrop-blur-sm nav-border-reveal">
			<div className="mx-auto flex items-center justify-between gap-2 px-4 flex-row sm:px-6 lg:px-8">
				{/* Alinha a logo à esquerda */}
				<div className="flex items-center justify-start">
					<YnsLink href="/">
						<img
							src="iridio logo1.png" // Caminho correto para a pasta public
							alt="Irídio Logo"
							width={75}
							height={37}
						/>
					</YnsLink>
				</div>

				{/* Menu de navegação com alinhamento à direita */}
				<div className="flex justify-center flex-grow max-sm:order-2">
					<NavMenu />
				</div>

				{/* Barra de pesquisa */}
				<div className="mr-3 ml-auto sm:ml-0">
					<SearchNav />
				</div>

				{/* Resumo do carrinho */}
				<CartSummaryNav />
			</div>
		</header>
	);
};
