// 타입 가드

function logText(el: Element) {
  console.log(el.textContent);
}

const h1el = document.querySelector("h1");
if (h1el) {
  logText(h1el);
}

if (h1el instanceof HTMLHeadingElement) {
  logText(h1el);
}

// =========================
function add(val: string | number) {
  let res = "Result =>";
  if (typeof val === "number") {
    res += val.toFixed(2);
  }
  if (typeof val === "string") {
    res += val.toUpperCase();
  }
  console.log(res);
}

add(3.141592);
add("Hello World!");
