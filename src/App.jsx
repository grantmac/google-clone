import bodyHtml from "./google-body.html?raw";

export default function App() {
  return (
    <div
      id="google-clone-root"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
}
