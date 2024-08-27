import { FC } from 'react'
import { classNames } from "shared/lib/classNames/classNames";
import cl from './LoginModal.module.scss'
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isAuth?: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { className, isAuth, onClose } = props;

  return (
    <Modal isOpen={isAuth} onClose={onClose} className={classNames(cl.LoginModal, {}, [className])}>
      <LoginForm />
    </Modal>
  )
}