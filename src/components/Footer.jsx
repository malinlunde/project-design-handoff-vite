import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
    const { t, i18n } = useTranslation("Footer");

    const changeLanguageFunc = (lng) => {
        i18n.changeLanguage(lng);
    };

    const languageOptions = [
        { value: "en", label: "English" },
        { value: "se", label: "Swedish" },
    ];

    return (
        <section className="footer">
            <div className="logo-container">
                <img src="/logo.png" alt="Logo" />
            </div>
            <div className="language-container">
                <button className="language-button">
                    <img src="/Planet.png" alt="Planet Icon" />
                    {t("language")}
                    <img src="/languagearrow.png" alt="Arrow" />
                </button>
                <div className="dropdown-content">
                    {languageOptions.map((option) => (
                        <div 
                        key={option.value}
                        onClick={() => changeLanguageFunc(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    );
};




export default Footer;