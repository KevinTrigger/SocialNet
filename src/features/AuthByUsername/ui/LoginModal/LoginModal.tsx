import { FC, memo, Suspense } from "react";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { Loader } from "shared/ui/deprecated/Loader";
import { Modal } from "shared/ui/deprecated/Modal";

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
