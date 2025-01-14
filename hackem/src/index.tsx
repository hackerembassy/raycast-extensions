import { ActionPanel, Action, Icon, List } from "@raycast/api";
import Status from "./status";
import BotAction from "./components/BotAction";
import botapi from "./lib/botapi";

export default function Command() {
  return (
    <List>
      <List.Item
        title="Status"
        icon={Icon.Link}
        actions={
          <ActionPanel>
            <Action.Push title="Status" target={<Status />} />
          </ActionPanel>
        }
      />
      <List.Item
        title="Going"
        icon={Icon.Link}
        actions={
          <ActionPanel>
            <Action.Push
              title="Going"
              target={<BotAction successMessage="You are going to Space today" apiCall={botapi.going.bind(botapi)} />}
            />
          </ActionPanel>
        }
      />
      <List.Item
        title="Not Going"
        icon={Icon.Link}
        actions={
          <ActionPanel>
            <Action.Push
              title="Not Going"
              target={
                <BotAction successMessage="You are not going to Space anymore" apiCall={botapi.notGoing.bind(botapi)} />
              }
            />
          </ActionPanel>
        }
      />
      <List.Item
        title="In"
        icon={Icon.Link}
        actions={
          <ActionPanel>
            <Action.Push
              title="In"
              target={<BotAction successMessage="You are in Space now" apiCall={botapi.in.bind(botapi)} />}
            />
          </ActionPanel>
        }
      />
      <List.Item
        title="Out"
        icon={Icon.Link}
        actions={
          <ActionPanel>
            <Action.Push
              title="Out"
              target={<BotAction successMessage="You are not in Space anymore" apiCall={botapi.out.bind(botapi)} />}
            />
          </ActionPanel>
        }
      />
      <List.Item
        title="Open"
        icon={Icon.Link}
        actions={
          <ActionPanel>
            <Action.Push
              title="Open"
              target={<BotAction successMessage="Space is open for guests" apiCall={botapi.open.bind(botapi)} />}
            />
          </ActionPanel>
        }
      />
      <List.Item
        title="Close"
        icon={Icon.Link}
        actions={
          <ActionPanel>
            <Action.Push
              title="Close"
              target={<BotAction successMessage="Space is closed for guests" apiCall={botapi.close.bind(botapi)} />}
            />
          </ActionPanel>
        }
      />
    </List>
  );
}
