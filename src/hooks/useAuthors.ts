import { useQuery } from "@tanstack/react-query";

import { getAuthors } from "@/services/authors";
import { Author } from "@/types";

export default function useAuthors() {
  return useQuery<Author[]>({
    queryKey: ["authors"],
    queryFn: getAuthors,
  });
}
