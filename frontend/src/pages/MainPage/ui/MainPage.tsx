import { Counter } from "entities/Counter";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

const MainPage = () => {
  const { t } = useTranslation("main");

  const [value, setValue] = useState<string>("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <div>{t("Главная страница")}</div>
      {/* <BugButton /> */}
      <Counter />
      <br />
      <Input value={value} placeholder="Введи текст" onChange={handleChange} />
    </>
  );
};

export default MainPage;
