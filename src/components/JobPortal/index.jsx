import { JobFilters } from "./JobFilters";
import { JobList } from "./JobList";


export const JobPortal = () => {
  return (
    <section className="flex flex-col  md:flex-row gap-2 px-4 py-10 bg-gray-50 dark:bg-neutral-900 transition-colors h-full w-full lg:overflow-hidden ">
      <JobList />
      <JobFilters />
    </section>
  );
};
