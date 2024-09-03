import React from "react";

interface WorkspaceIdPageProps {
  params: {
    workspaceId: string;
  };
}
const page = ({ params } : WorkspaceIdPageProps) => {
  return <div>
    ID : {params.workspaceId}
  </div>;
};

export default page;
