import bodyHtml from "./google-body.html?raw";

export default function App() {
  if (typeof document !== "undefined") {
    document.title = "Superhands";
  }

  return (
    <div
      id="google-clone-root"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
}
