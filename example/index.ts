import { createContainer } from "../container";

const container = createContainer();

class TestService {
  test() {
    return false;
  }
}

class AdService {
  insert() {
    return true;
  }
}

container.bind("ad-service", () => new AdService());
console.log(container.use("ad-service").insert());

container.bind("test-service", () => new TestService());
console.log(container.use("test-service").test());
