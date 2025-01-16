import { ActionPanel, Action, Icon, List } from "@raycast/api";
import Status from "./status";
import People from "./people";
import BotAction from "./components/BotAction";
import botapi from "./lib/botapi";
import ConfirmedAction from "./components/ConfirmedAction";

export default function Command() {
  return (
    <List>
      <List.Section title="Space Status">
        <List.Item
          title="Status"
          icon={Icon.SquareEllipsis}
          actions={
            <ActionPanel>
              <Action.Push title="Status" target={<Status />} />
            </ActionPanel>
          }
        />
        <List.Item
          title="People Inside"
          icon={Icon.Person}
          actions={
            <ActionPanel>
              <Action.Push title="People Inside" target={<People />} />
            </ActionPanel>
          }
        />
      </List.Section>
      <List.Section title="I am">
        <List.Item
          title="Going"
          icon={Icon.Footprints}
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
          icon={Icon.BathTub}
          actions={
            <ActionPanel>
              <Action.Push
                title="Not Going"
                target={
                  <BotAction
                    successMessage="You are not going to Space anymore"
                    apiCall={botapi.notGoing.bind(botapi)}
                  />
                }
              />
            </ActionPanel>
          }
        />
        <List.Item
          title="In"
          icon={Icon.CheckCircle}
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
          icon={Icon.Circle}
          actions={
            <ActionPanel>
              <Action.Push
                title="Out"
                target={<BotAction successMessage="You are not in Space anymore" apiCall={botapi.out.bind(botapi)} />}
              />
            </ActionPanel>
          }
        />
      </List.Section>
      <List.Section title="Control">
        <List.Item
          title="Open"
          icon={Icon.Sun}
          actions={
            <ActionPanel>
              <Action.Push
                title="Open"
                target={
                  <ConfirmedAction successMessage="Space is open for guests" apiCall={botapi.open.bind(botapi)} />
                }
              />
            </ActionPanel>
          }
        />
        <List.Item
          title="Close"
          icon={Icon.Moon}
          actions={
            <ActionPanel>
              <Action.Push
                title="Close"
                target={
                  <ConfirmedAction successMessage="Space is closed for guests" apiCall={botapi.close.bind(botapi)} />
                }
              />
            </ActionPanel>
          }
        />
      </List.Section>
    </List>
  );
}
