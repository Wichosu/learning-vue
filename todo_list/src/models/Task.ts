import { State } from "../types/enums";

export class Task {
  id: string;
  value: string;
  state: string;

  constructor(value: string) {
    this.id = self.crypto.randomUUID();
    this.value = value;
    this.state = State.Pending;
  };

  isPending(): Boolean {
    return this.state === State.Pending;
  };

  isDone(): Boolean {
    return this.state === State.Done;
  };
};