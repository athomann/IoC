# IoC

Basic implementation of IoC container.

```
container.bind("ad-service", () => new AdService());
container.use("ad-service").insert();

container.bind("test-service", () => new TestService());
container.use("test-service").test()
```

```
npm run-script test
```
