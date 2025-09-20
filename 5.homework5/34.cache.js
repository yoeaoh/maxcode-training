// https://maxcode.dev/problems/cache/

class TimeLimitedCache {
    #keys = new Map()

    set(key, value, duration) {
        const hasKey = this.#keys.has(key);

        this.#keys.set(key, value);

        if (hasKey) {
            // Перезаписать таймаут до его истечения
        }

        const timeoutId = setTimeout(() => {
            this.#keys.delete(key);

            clearTimeout(timeoutId);
        }, duration)

        return !!hasKey;
    }

    get(key) {
        return this.#keys.has(key) ? this.#keys.get(key) : -1;
    }

    count() {
        return this.#keys.size;
    }
}

const cache = new TimeLimitedCache();

setTimeout(() => console.log(cache.set(1, 500, 450)),   0);   // false
setTimeout(() => console.log(cache.get(1)),           100);   // 500
setTimeout(() => console.log(cache.set(2, 600, 350)), 200);   // false
setTimeout(() => console.log(cache.get(2)),           300);   // 600
setTimeout(() => console.log(cache.count()),          400);   // 2
setTimeout(() => console.log(cache.set(2, 800, 250)), 500);   // true
setTimeout(() => console.log(cache.count()),          600);   // 1
setTimeout(() => console.log(cache.get(2)),           700);   // 800

