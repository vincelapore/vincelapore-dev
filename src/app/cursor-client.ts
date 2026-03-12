export function initCursor() {
  if (typeof window === "undefined") return;

  const cursor = document.getElementById("cursor");
  if (!cursor) return;

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate3d(${mouseX - 6}px, ${mouseY - 6}px, 0)`;
  });
}

