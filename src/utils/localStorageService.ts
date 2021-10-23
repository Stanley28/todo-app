const localStorageService = {
    set(key: string, value: string): void {
        localStorage.setItem(key, value);
    },

    get(key: string): (null | string) {
        return localStorage.getItem(key);
    },

    remove(key: string): void {
        localStorage.removeItem(key);
    },

    clear(): void {
        localStorage.clear();
    }
}

export default localStorageService