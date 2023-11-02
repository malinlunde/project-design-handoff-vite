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

    const handleLanguageChange = (lng) => {
        changeLanguageFunc(lng);
    };

    return (
        <section className="footer">
            <div className="logo-container">
                <img src="/logo.png" alt="Logo" />
            </div>
            <div className="language-container">
                <button className="language-button" onClick={() => handleLanguageChange("se")}>
                    <img src="/Planet.png" alt="Planet Icon" />
                    {i18n.language === "en" ? "English" : "Svenska"}
                    <img src="/languagearrow.png" alt="Arrow" />
                    <div className="dropdown-content">
                    {languageOptions.map((option) => (
                        <div 
                        key={option.value}
                        onClick={() => handleLanguageChange(option.value)}
                        >
                            {option.label}
                        </div>
                     ))}
                    </div>
                </button>
            </div>
            
        </section>
    );
};




export default Footer;