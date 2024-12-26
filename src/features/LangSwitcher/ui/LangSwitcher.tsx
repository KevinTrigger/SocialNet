import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from "shared/ui/deprecated/Button";
import { ToggleFeatures } from "shared/lib/features";
import { Button } from "shared/ui/redesigned/Button";

interface LangSwitcherProps {
  className?: string;
  isShort?: boolean;
}

const LangSwitcher = (props: LangSwitcherProps) => {
  const { className, isShort } = props;

  const { t, i18n } = useTranslation("translation");

  const LangSwitcherDeprecated = () => (
    <ButtonDeprecated
      className={classNames("", {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleLang}
    >
      {t(isShort ? "Короткое название" : "Язык")}
    </ButtonDeprecated>
  );

  const toggleLang = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={<LangSwitcherDeprecated />}
      on={
        <Button
          className={classNames("", {}, [className])}
          variant={"clear"}
          onClick={toggleLang}
        >
          {t(isShort ? "Короткое название" : "Язык")}
        </Button>
      }
    />
  );
};

export default memo(LangSwitcher);
