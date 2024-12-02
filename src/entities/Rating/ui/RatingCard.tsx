import { FC, useCallback, useState } from "react";
import { Text } from "shared/ui/Text/Text";
import { StarRating } from "shared/ui/StarRating/StarRating";
import { Modal } from "shared/ui/Modal";
import { Input } from "shared/ui/Input/Input";
import { Card } from "shared/ui/Card/Card";
import { HStack, VStack } from "shared/ui/Stack";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { BrowserView, MobileView } from "react-device-detect";
import { Drawer } from "shared/ui/Drawer/Drawer";

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard: FC<RatingCardProps> = (props) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    rate = 0,
    onAccept,
    onCancel,
  } = props;
  const { t } = useTranslation("");
  const [countStar, setCountStar] = useState(rate);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  const onSelectStars = useCallback(
    (starNum: number) => {
      setCountStar(starNum);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(starNum);
      }
    },
    [hasFeedback, onAccept]
  );

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const acceptHandle = useCallback(() => {
    onCloseModal();
    onAccept?.(countStar, feedback);
    setFeedback("");
  }, [countStar, onAccept, feedback]);

  const cancelHandle = useCallback(() => {
    onCloseModal();
    onCancel?.(countStar);
  }, [countStar, onCancel]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        value={feedback}
        onChange={setFeedback}
        placeholder={t("Ваш отзыв")}
      />
    </>
  );

  return (
    <Card className={className}>
      <VStack align="center" gap="4">
        {title && <Text title={countStar ? t("Спасибо за оценку!") : title} />}
        <StarRating
          size={30}
          onSelect={onSelectStars}
          selectedStars={countStar}
        />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack gap="8" max>
            {modalContent}
            <HStack gap="16" max justify="end">
              <Button onClick={acceptHandle}>{t("Отправить")}</Button>
              <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                {t("Отмена")}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
          <VStack gap="16" max justify="end">
            {modalContent}
            <Button fullWidth={true} onClick={acceptHandle}>
              {t("Отправить")}
            </Button>
            <Button
              fullWidth={true}
              onClick={cancelHandle}
              theme={ButtonTheme.OUTLINE_RED}
            >
              {t("Отмена")}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
};
