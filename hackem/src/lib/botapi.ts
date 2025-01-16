import fetch from "node-fetch";
import preferences from "./preferences";
import { ok, text, json } from "./utils";

class BotAPI {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  public getStatus() {
    return this.request("/text/status").then(text);
  }

  public getPeople() {
    return this.request("/api/inside").then(json);
  }

  public setGoing(value: boolean) {
    return this.request("/api/setgoing", "POST", {
      isgoing: value,
    }).then(ok);
  }

  public going() {
    return this.setGoing(true);
  }

  public notGoing() {
    return this.setGoing(false);
  }

  public open() {
    return this.request("/api/open", "POST").then(ok);
  }

  public close() {
    return this.request("/api/close", "POST").then(ok);
  }

  public in() {
    return this.request("/api/in", "POST").then(ok);
  }

  public out() {
    return this.request("/api/out", "POST").then(ok);
  }

  public text(text: string) {
    return this.request("/api/embassy/text", "POST", { text }).then(ok);
  }

  public say(text: string) {
    return this.request("/api/embassy/say", "POST", { text }).then(ok);
  }

  private request(path: string, method = "GET", body?: unknown) {
    return fetch(this.baseURL + path, {
      method,
      body: JSON.stringify(body),
      headers: {
        token: preferences.token,
        "Content-Type": "application/json",
      },
    });
  }
}

export default new BotAPI(preferences.gateway);
