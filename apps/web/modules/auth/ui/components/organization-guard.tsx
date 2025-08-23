"use client";

import { useOrganization } from "@clerk/nextjs";
import { AuthLayout } from "../layouts";
import { OrgSelectView } from "../views";

export const OrganizationGuard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { organization } = useOrganization();

  if (!organization) {
    return (
      <AuthLayout>
        <OrgSelectView />
      </AuthLayout>
    );
  }

  return <>{children}</>;
};
