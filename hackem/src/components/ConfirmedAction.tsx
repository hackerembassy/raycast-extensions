import WithConfirmation from "./WithConfirmation";
import BotAction, { BotActionProps } from "./BotAction";

export default function Command(props: BotActionProps) {
  return (
    <WithConfirmation text="Are you sure?">
      <BotAction {...props} />
    </WithConfirmation>
  );
}
