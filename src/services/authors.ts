import { delay } from "@/utils";
import { Author, AuthorOnlineStatus } from "@/types";
import authorsData from "@/mocks/authors.json";

export async function getAuthors(): Promise<Author[]> {
  await delay(Math.random() * 1000 + 1000);
  return authorsData.map((author) => ({
    ...author,
    onlineStatus: author.onlineStatus as AuthorOnlineStatus,
  }));
}
