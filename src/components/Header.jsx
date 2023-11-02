import { useTranslation } from "react-i18next";
import "./Header.css";

export const Header = () => {
    const { t } = useTranslation("Header");

    return (
        <header className="sticky-header">
            <div className="header-content">
                <h1>Sunshine Studio</h1>
                <div className="burger-menu">
                    <img src="/burger.png" alt="Menu" />
                </div>
            </div>
        </header>
    );
};

export default Header;