import { FC, useEffect, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/deprecated/Button";

// КОМПОНЕНТ ДЛЯ ТЕСТИРОВАНИЯ ErrorBoundary

const BugButton: FC = () => {
  const [error, setError] = useState<boolean>(false);

  const onThrowError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button theme={ButtonTheme.OUTLINE} onClick={onThrowError}>
      throw error
    </Button>
  );
};

export default BugButton;
