import { FC, memo, Suspense } from "react";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { Loader } from "shared/ui/Loader";
import { Modal } from "shared/ui/Modal";

interface LoginModalProps {
  className?: string;
  isAuth?: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = memo((props) => {
  const { isAuth, onClose } = props;

  return (
    <Modal isOpen={isAuth} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
});
