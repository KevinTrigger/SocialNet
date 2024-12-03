import { Page } from "widgets/Page";
import { EditableProfileCard } from "features/EditableProfileCard";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text";
import { useTranslation } from "react-i18next";
import { ProfileRating } from "features/ProfileRating";
import cl from "./ProfilePage.module.scss";

export const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("");

  if (!id) {
    return <Text title={t("Страница с данным профилем не существует")} />;
  }

  return (
    <Page>
      <EditableProfileCard id={id} />
      <ProfileRating className={cl.profileRating} profileId={id} />
    </Page>
  );
};

export default ProfilePage;
