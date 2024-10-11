import { FC, memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
// import { useTranslation } from "react-i18next";
import cl from "./CommentForm.module.scss";
import { Input } from "shared/ui/Input/Input";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slice/addCommentFormSlice";
import { useSelector } from "react-redux";
import { getCommentFormText } from "../../model/selectors/commentFormSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { sendComment } from "features/AddNewComment/model/services/sendComment/sendComment";

export interface CommentFormProps {
  className?: string;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const CommentForm: FC<CommentFormProps> = (props) => {
  const { className } = props;
  // const { t } = useTranslation("");
  const text = useSelector(getCommentFormText);
  const dispatch = useAppDispatch();

  const onChangeText = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const onSendComment = useCallback(() => {
    dispatch(sendComment());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cl.CommentForm, {}, [className])}>
        <Input
          value={text}
          onChange={onChangeText}
          className={cl.text}
          placeholder={">"}
        />
        <Button
          onClick={onSendComment}
          className={cl.btn}
          theme={ButtonTheme.OUTLINE}
        >
          Отправить
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(CommentForm);
