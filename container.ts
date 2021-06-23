export function createContainer() {
  const container = new Map();

  return {
    bind(key: string, callback: Function) {
      container.set(key, { callback, singleton: false });
    },

    singleton(key: string, callback: Function) {
      container.set(key, { callback, singleton: true });
    },

    use(key: string) {
      let item = container.get(key);

      if (!item) {
        throw new Error("Key not in container");
      }

      if (item.singleton && !item.instance) {
        item.instance = item.callback();
      }

      return item.singleton ? item.instance : item.callback();
    },
  };
}
