export const getCookieValue = (name) => {
    if (typeof document === "undefined") return null; // SSR-safe
    const value = document.cookie.match(
        "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
    );
    return value ? value.pop() : null;
};

export const setCookieValue = (key, value, expirationDays = 30) => {
    const d = new Date();
    d.setTime(d.getTime() + expirationDays * 24 * 60 * 60 * 1000); // Convert days to milliseconds
    const expires = "expires=" + d.toUTCString(); // Format expiration date as a string

    document.cookie = `${key}=${encodeURIComponent(value)}; ${expires}; path=/`;
};