import { confirmAlert, useNavigation } from "@raycast/api";

import { ReactNode, useEffect, useState } from "react";

interface ConfirmationCommandProps {
  children: ReactNode;
  text: string;
}

export default function Command({ children, text }: ConfirmationCommandProps) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { pop } = useNavigation();

  useEffect(() => {
    confirmAlert({ title: text }).then((confirmed) => {
      confirmed ? setIsConfirmed(confirmed) : pop();
    });
  }, []);

  return isConfirmed ? <>{children}</> : null;
}
