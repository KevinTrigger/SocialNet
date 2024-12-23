import { buildSelector } from "shared/lib/store"
import { JsonSettings } from "../../types/jsonSettings";
import { Theme } from "shared/const/theme";

const defaultJsonSettings: JsonSettings = {
  isFirstVisit: true,
  settingsPageHasBeenOpen: false,
  theme: Theme.LIGHT
}

export const [useJsonSettings, getJsonSettings] = buildSelector(
  state => state.user?.authData?.jsonSettings ?? defaultJsonSettings
);