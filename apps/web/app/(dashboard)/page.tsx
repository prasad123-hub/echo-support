"use client";

import { useQuery } from "convex/react";
import { api } from "@workspace/backend/convex/_generated/api";
import { Authenticated, Unauthenticated } from "convex/react";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  OrganizationSwitcher,
} from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getUsers);
  return (
    <div className="flex items-center justify-center min-h-svh">
      <Authenticated>
        <p>Hello World from web</p>
        <pre>{JSON.stringify(users, null, 2)}</pre>
        <OrganizationSwitcher />
        <SignOutButton />
        <UserButton />
      </Authenticated>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
    </div>
  );
}
