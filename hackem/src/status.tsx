import { Detail } from "@raycast/api";

import { useEffect, useState } from "react";
import botapi from "./lib/botapi";

export default function Command() {
  const [status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    botapi.getStatus().then((data) => {
      setStatus(data);
      setIsLoading(false);
    });
  }, []);

  return <Detail isLoading={isLoading} markdown={status} />;
}
