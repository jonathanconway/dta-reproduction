export function getLocalStorage<T>(key: string) {
  const localStorageValue = localStorage.getItem(key);
  if (!localStorageValue) {
    return undefined;
  }
  return JSON.parse(localStorageValue) as T;
}

export function setLocalStorage<T>(key: string, value: T) {
  return localStorage.setItem(key, JSON.stringify(value));
}
