import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { RatingCard } from "entities/Rating";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import {
  useGetProfileRating,
  useRateProfileRating,
} from "../api/profileRatingApi";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Card } from "shared/ui/Card/Card";
import { Text, TextTheme } from "shared/ui/Text/Text";

export interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

const ProfileRating: FC<ProfileRatingProps> = (props) => {
  const { className, profileId } = props;
  const { t } = useTranslation("");
  const userData = useSelector(getUserAuthData);
  const isProfileCurrentUser = userData?.id === profileId;

  const { data, isLoading, error } = useGetProfileRating({
    profileId,
    userId: userData?.id || "",
  });

  const [rateProfileRating] = useRateProfileRating();

  const rating = data?.[0];

  const handleRateProfile = useCallback(
    (starsCount: number, feedback?: string) => {
      rateProfileRating({
        profileId,
        rate: starsCount,
        userId: userData?.id || "",
        feedback: feedback,
      });
    },
    [profileId, rateProfileRating, userData?.id]
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateProfile(starsCount);
    },
    [handleRateProfile]
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateProfile(starsCount, feedback);
    },
    [handleRateProfile]
  );

  if (isProfileCurrentUser) {
    return null;
  }

  if (isLoading) {
    return <Skeleton className={className} border={"8px"} height={90} />;
  }

  if (error) {
    return (
      <Card>
        <Text
          theme={TextTheme.ERROR}
          title={t("Ошибка при получении данных о рейтинге")}
          text={t("Попробуйте перезагрузить страницу")}
        />
      </Card>
    );
  }

  return (
    <RatingCard
      className={className}
      feedbackTitle={t("Подскажите автору как улучшить его профиль!")}
      title={t("Оцените профиль пользователя")}
      hasFeedback={true}
      rate={rating?.rate}
      onCancel={onCancel}
      onAccept={onAccept}
    />
  );
};

export default memo(ProfileRating);
