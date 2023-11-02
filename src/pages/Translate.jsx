import { useTranslation } from "react-i18next";

export const Translate = () => {
    const text = {

    }


const { t, i18n } = useTranslation();

const changeLanguageFunc = (lng) => {
    i18n.changeLanguage(lng);
};

return (
    <div>

    </div>
    );
};

export default Translate;