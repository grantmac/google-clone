import { useEffect, useRef } from "react";
import bodyHtml from "./google-body.html?raw";
import googleStyles from "./google-styles.css?raw";

export default function App() {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    document.title = "Google";
    document.documentElement.lang = "en-GB";

    const style = document.createElement("style");
    style.id = "google-clone-styles";
    style.textContent = googleStyles;
    document.head.appendChild(style);

    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "https://www.gstatic.com/images/branding/searchlogo/ico/favicon.ico";
    document.head.appendChild(favicon);

    return () => {
      style.remove();
      favicon.remove();
    };
  }, []);

  return (
    <div
      id="google-clone-root"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
}
