export function initCursor() {
  if (typeof window === "undefined") return;

  const cursor = document.getElementById("cursor");
  const ring = document.getElementById("cursorRing");
  if (!cursor || !ring) return;

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
  });

  function animateRing() {
    ringX += (mouseX - ringX - 18) * 0.12;
    ringY += (mouseY - ringY - 18) * 0.12;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    window.requestAnimationFrame(animateRing);
  }

  animateRing();

  document.querySelectorAll("a").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform += " scale(2.5)";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.transform = cursor.style.transform.replace(" scale(2.5)", "");
    });
  });
}

