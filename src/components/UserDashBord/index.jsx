import { JobPortal } from "../JobPortal";
import { JobList } from "../JobPortal/JobList";
import { SidebarProfile } from "./SideBarProfile";

export const Dashboard = () => {
  return (
    <>
      <div className="h-full flex">
        <SidebarProfile />
        <JobPortal />
      </div>
    </>
  );
};
