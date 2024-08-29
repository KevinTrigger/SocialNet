import { FC } from "react";
import { Modal } from "shared/ui/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
  className?: string;
  isAuth?: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { isAuth, onClose } = props;

  return (
    <Modal
      isOpen={isAuth}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};
