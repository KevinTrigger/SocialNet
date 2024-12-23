import { FC } from 'react'
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cl from './[FTName].module.scss'

interface [FTName]Props {
  className?: string;
}

export const [FTName]: FC<[FTName]Props> = (props) => {
  const { className } = props;
  const { t } = useTranslation("")

  return (
    <div className={classNames(cl.[FTName], {}, [className])}>

    </div>
  )
}