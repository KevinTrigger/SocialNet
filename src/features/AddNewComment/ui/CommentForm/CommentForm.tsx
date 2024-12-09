import { FC, memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cl from "./CommentForm.module.scss";
import { Input } from "shared/ui/Input";
import { Button, ButtonTheme } from "shared/ui/Button";
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

export interface CommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const CommentForm: FC<CommentFormProps> = (props) => {
  const { className, onSendComment } = props;
  const text = useSelector(getCommentFormText);
  const dispatch = useAppDispatch();

  const onChangeText = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || "");
    onChangeText("");
  }, [onChangeText, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div
        data-testid={"CommentForm"}
        className={classNames(cl.CommentForm, {}, [className])}
      >
        <Input
          value={text}
          onChange={onChangeText}
          className={cl.text}
          placeholder={">"}
          data-testid={"CommentForm.Input"}
        />
        <Button
          onClick={onSendHandler}
          className={cl.btn}
          theme={ButtonTheme.OUTLINE}
          data-testid={"CommentForm.SendButton"}
        >
          Отправить
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(CommentForm);
