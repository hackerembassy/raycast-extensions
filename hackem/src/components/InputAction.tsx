import { Form, ActionPanel, Action, showToast, Toast } from "@raycast/api";
import { useState } from "react";

export default function Command({ onSubmit }: { onSubmit: (arg0: string) => Promise<boolean> }) {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState<string>("");

  return (
    <Form
      isLoading={isLoading}
      actions={
        <ActionPanel>
          <Action.SubmitForm
            onSubmit={async () => {
              setIsLoading(true);
              showToast({
                title: "Loading",
                message: "Trying to send a message",
                style: Toast.Style.Animated,
              });
              const success = await onSubmit(input);
              if (success) {
                showToast({
                  title: "Success",
                  message: "Message sent",
                  style: Toast.Style.Success,
                });
                setInput("");
              } else {
                showToast({
                  title: "Error",
                  message: "An error occurred",
                  style: Toast.Style.Failure,
                });
              }
              setIsLoading(false);
            }}
          />
        </ActionPanel>
      }
    >
      <Form.TextArea id="input" title="Input" value={input} onChange={setInput} />
    </Form>
  );
}
