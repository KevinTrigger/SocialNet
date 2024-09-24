import { profileActions, profileReducer } from './model/slice/profileSlice';
import { type Profile, type ProfileSchema } from './model/types/profile';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';

export {
  Profile,
  ProfileSchema,
  ProfileCard,
  profileActions,
  profileReducer,
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading
} 