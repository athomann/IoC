# IoC

Basic implementation of IoC container.

```
container.bind("ad-service", () => new AdService());
container.use("ad-service").insert();

container.bind("ad-service", () => new TestService());
container.use("ad-service").test()
```

```
npm run-script test
```
