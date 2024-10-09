import { memo } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cl from "./[FTName].module.scss";

const [FTName] = () => {
  const { t } = useTranslation("");

  return <div></div>;
};

export default memo([FTName]);
