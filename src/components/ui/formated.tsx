import { formatDistanceToNow } from "date-fns";

export const formatDate = (date: string) => {
    return date ? formatDistanceToNow(new Date(date), { addSuffix: true } ) : "";
  };