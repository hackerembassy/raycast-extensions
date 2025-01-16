import { Response } from "node-fetch";

export function ok(res: Response) {
  if (!res.ok) throw new Error(`Request failed with status code ${res.status}`);

  return true;
}

export function json(res: Response) {
  if (!res.ok) throw new Error(`Request failed with status code ${res.status}`);

  return res.json();
}

export function text(res: Response) {
  if (!res.ok) throw new Error(`Request failed with status code ${res.status}`);

  return res.text();
}
