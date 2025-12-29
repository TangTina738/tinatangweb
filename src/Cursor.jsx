import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Style/Cursor.css";

function Cursor() {
  const cursorRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // ✅ preload hover cursor image (prevents flash)
    const img = new Image();
    img.src = "/cursorView.png";

    const moveCursor = (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    const onMouseDown = () => {
      cursor.classList.add("cursor-click");
      cursor.classList.remove("cursor-media");
    };

    const onMouseUp = () => cursor.classList.remove("cursor-click");

    const onPointerOver = (e) => {
      const hit = e.target.closest?.(".work-media, .work-media-link");
      if (hit) cursor.classList.add("cursor-media");
    };

    const onPointerOut = (e) => {
      const from = e.target.closest?.(".work-media, .work-media-link");
      const to = e.relatedTarget?.closest?.(".work-media, .work-media-link");
      if (from && !to) cursor.classList.remove("cursor-media");
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("pointerover", onPointerOver, true);
    document.addEventListener("pointerout", onPointerOut, true);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("pointerover", onPointerOver, true);
      document.removeEventListener("pointerout", onPointerOut, true);
    };
  }, []);

  useEffect(() => {
    cursorRef.current?.classList.remove("cursor-media", "cursor-click");
  }, [location.pathname]);

  return <div ref={cursorRef} className="cursor" />;
}

export default Cursor;
