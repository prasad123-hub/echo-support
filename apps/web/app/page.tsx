"use client";

import { useQuery } from "convex/react";
import { api } from "@workspace/backend/convex/_generated/api";

export default function Page() {
  const users = useQuery(api.users.getUsers);
  return (
    <div className="flex items-center justify-center min-h-svh">
      <p>Hello World from web</p>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
