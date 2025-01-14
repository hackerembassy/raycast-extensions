import { getPreferenceValues } from "@raycast/api";

interface Preferences {
  gateway: string;
  token: string;
}

export default getPreferenceValues<Preferences>();
