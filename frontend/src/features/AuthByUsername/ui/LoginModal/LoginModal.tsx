import { FC, Suspense } from "react";
import { Modal } from "shared/ui/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

interface LoginModalProps {
  className?: string;
  isAuth?: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { isAuth, onClose } = props;

  return (
    <Modal isOpen={isAuth} onClose={onClose} lazy>
      <Suspense fallback="">
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
