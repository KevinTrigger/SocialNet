import { FC, useEffect, useState } from "react";
import Button from "shared/ui/Button/Button";


// КОМПОНЕНТ ДЛЯ ТЕСТИРОВАНИЯ ErrorBoundary

const BugButton: FC = () => {
  const [error, setError] = useState<boolean>(false);

  const onThrowError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={onThrowError}>throw error</Button>;
};

export default BugButton;
