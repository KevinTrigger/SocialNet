import { FeatureFlags } from "shared/types/featureFlags";

export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  USER = 'USER'
}

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  features?: FeatureFlags;
}

export interface UserSchema {
  authData?: User;
  
  _inited: boolean;
}