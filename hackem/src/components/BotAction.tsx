import { Detail } from "@raycast/api";

import { useEffect, useState } from "react";

export interface BotActionProps {
  successMessage: string;
  apiCall: () => Promise<boolean>;
}

export default function Command({ successMessage, apiCall }: BotActionProps) {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiCall()
      .then(() => {
        setMessage(successMessage);
      })
      .catch(() => {
        setMessage("An error occurred");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return <Detail isLoading={isLoading} markdown={message} />;
}
