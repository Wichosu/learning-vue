export default class Task {
  constructor(value) {
    this.id = self.crypto.randomUUID();
    this.value = value;
    this.state = "pending";
  };
};