import { OrganizationList } from "@clerk/nextjs";

export const OrgSelectView = () => {
  return (
    <>
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl="/"
        afterSelectOrganizationUrl="/"
        skipInvitationScreen
      />
    </>
  );
};
