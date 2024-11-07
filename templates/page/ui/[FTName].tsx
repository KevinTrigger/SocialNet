import { memo } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import {Page} from 'widgets/Page/Page';
import cl from "./[FTName].module.scss";

const [FTName] = () => {
  const { t } = useTranslation("");

  return (
    <Page>
      [FTName]
    </Page>
  );
};

export default memo([FTName]);
