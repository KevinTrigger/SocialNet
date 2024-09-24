import { FC, memo, useEffect } from "react";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  ProfileCard,
  profileReducer,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = () => {
  const dispatch = useAppDispatch();

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  console.log(data, ' data')

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProfilePageHeader />
      <ProfileCard data={data} isLoading={isLoading} error={error} />
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePage);
