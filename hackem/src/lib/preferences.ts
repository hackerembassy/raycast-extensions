import { getPreferenceValues } from "@raycast/api";

interface Preferences {
  gateway: string;
  username: string;
  token: string;
}

export default getPreferenceValues<Preferences>();
