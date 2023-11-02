import { useTranslation } from "react-i18next";

const Section2 = () => {
    const { t } = useTranslation("Section2");

    return (
        <section className="section2">
            <div className="text-container">
                <p>{t("text1")}</p>
                <p>{t("text2")}</p>
            </div>
            <button className="get-started-button">{t("getStartedButton")}</button>
        </section>
    );
};




export default Section2;