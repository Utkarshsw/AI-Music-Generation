"use client";

import { authClient } from "~/lib/auth-client";
import { Button } from "../ui/button";

export default function Upgrade() {
  const upgrade = async () => {
    await authClient.checkout({
      products: [
        "e796281a-1b35-48ca-b6d2-7d2dd5d5db5b",
        "55685d07-15e5-48fe-8339-c5afa5f8f437",
        "a790901c-607d-435c-85f5-747275ca1bf7",
      ],
    });
  };
  return (
    <Button
      variant="outline"
      size="sm"
      className="ml-2 cursor-pointer text-orange-400"
      onClick={upgrade}
    >
      Upgrade
    </Button>
  );
}
