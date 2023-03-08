import { writable } from 'svelte/store'
import { browser } from '$app/environment'
function getLocalStorageValue(key, defaultValue) {
    if(!browser)
    {
        return []
    }
    const storedValue = localStorage.getItem(key);
    if (storedValue === null) {
      return defaultValue;
    } else {
      return JSON.parse(storedValue);
    }

  }
export const Todos = writable(getLocalStorageValue('JaxonTodos', []))

