import fetch from "node-fetch";
import preferences from "./preferences";

class BotAPI {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  public async getStatus() {
    return (await this.request("/text/status")).text();
  }

  public async getPeople() {
    return (await this.request("/api/inside")).json();
  }

  public async setGoing(value: boolean) {
    return (
      await this.request("/api/setgoing", "POST", {
        isgoing: value,
      })
    ).ok;
  }

  public going() {
    return this.setGoing(true);
  }

  public notGoing() {
    return this.setGoing(false);
  }

  public async open() {
    return (await this.request("/api/open", "POST")).ok;
  }

  public async close() {
    return (await this.request("/api/close", "POST")).ok;
  }

  public async in() {
    return (await this.request("/api/in", "POST")).ok;
  }

  public async out() {
    return (await this.request("/api/out", "POST")).ok;
  }

  private async request(path: string, method = "GET", body?: unknown) {
    return await fetch(this.baseURL + path, {
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
