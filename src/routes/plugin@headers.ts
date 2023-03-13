import { type RequestHandler } from "@builder.io/qwik-city";

const HEADERS: Record<string, string> = {
  "All-My-Headers": process.env.MY_VARIABLE!,
};

export const onRequest: RequestHandler = ({ headers }) => {
  for (const key in HEADERS) {
    headers.set(key, HEADERS[key]);
  }
};
