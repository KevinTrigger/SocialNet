import { profileActions, profileReducer } from './model/slice/profileSlice';
import { type Profile, type ProfileSchema } from './model/types/profile';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export {
  Profile,
  ProfileSchema,
  ProfileCard,
  profileActions,
  profileReducer,
  fetchProfileData,
} 