import { Page } from "widgets/Page/Page";
import { EditableProfileCard } from "features/EditableProfileCard";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";

export const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("");

  if (!id) {
    return <Text title={t("Страница с данным профилем не существует")} />;
  }

  return (
    <Page>
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default ProfilePage;
