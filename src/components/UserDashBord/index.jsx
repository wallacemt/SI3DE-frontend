import { JobList } from "./JobList";
import { SidebarProfile } from "./SideBarProfile";

export const Dashboard = () => {
  return (
    <>
      <div className="h-screen">
        <SidebarProfile />
        <JobList />
      </div>
    </>
  );
};
