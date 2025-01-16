import { Action, ActionPanel, List } from "@raycast/api";

import { useEffect, useState } from "react";
import botapi from "./lib/botapi";

interface PeopleStates {
  user_id: number;
  date: number;
  user: {
    username: string;
    roles: string;
  };
}

export default function Command() {
  const [people, setPeople] = useState<PeopleStates[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    botapi.getPeople().then((data) => {
      setPeople(data as PeopleStates[]);
      setIsLoading(false);
    });
  }, []);

  return (
    <List isLoading={isLoading}>
      {people.map((person) => (
        <List.Item
          key={person.user.username}
          title={person.user.username}
          subtitle={person.user.roles}
          accessories={[
            {
              text: `${new Date(person.date).toLocaleString("en", {
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}`,
            },
          ]}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser title="Open in Telegram" url={`tg://resolve?domain=${person.user.username}`} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
