import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import Button, { ButtonTheme } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
  isShort?: boolean;
}

const LangSwitcher = (props: LangSwitcherProps) => {
  const { className, isShort } = props;

  const { t, i18n } = useTranslation('translation');

  const toggleLang = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames("", {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleLang}
    >
      {t(isShort ? "Короткое название" : "Язык")}
    </Button>
  );
};

export default LangSwitcher;
