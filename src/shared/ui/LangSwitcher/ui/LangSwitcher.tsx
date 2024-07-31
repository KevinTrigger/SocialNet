import { classNames } from "shared/lib/classNames";
import cl from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import Button, { ButtonTheme } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(cl.LangSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleLang}
    >
      {t("Язык")}
    </Button>
  );
};

export default LangSwitcher;
