export function init() {
    const el = document.createElement('div');
    el.textContent = "Heavy module loaded lazily!";
    document.body.appendChild(el);
}
