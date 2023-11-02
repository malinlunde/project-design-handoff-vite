import { useTranslation } from "react-i18next";

const Section1 = () => {
    const { t } = useTranslation("Section1");
    console.log(t("title"));

    return (
        <section className="section1">
            <div className="logo-container">
                <img src="/logo.png" alt="Logo" />
            </div>
            <div className="text-container">
                <h2>{t("title")}</h2>
            </div>
        </section>
    );
};


export default Section1;