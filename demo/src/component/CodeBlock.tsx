import { 
  // useShikiHighlighter, 
  ShikiHighlighter 
} from "react-shiki";
import { useState, useEffect } from 'react'

export default function CodeBlock({
  code = '',
  language = 'javascript',
  theme = '',
  useToggle = true
}: { 
  code: string,
  language: string,
  theme: string,
  useToggle: boolean
}) {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!useToggle) setOpen(true)
  },[useToggle])

  // document.documentElement 의 dark-mode / light-mode 클래스 변경에 맞춰
  // shiki theme prop을 자동으로 맞춥니다. theme prop이 있으면 그 값을 우선합니다.
  const [autoTheme, setAutoTheme] = useState(theme);

  useEffect(() => {
    function detectTheme() {
      if (theme) {
        setAutoTheme(theme);
        return;
      }
      const isDark =
        document.documentElement.classList.contains("dark-mode");
      setAutoTheme(isDark ? "github-dark" : "github-light");
    }

    detectTheme();

    if (theme) {
      return;
    }

    const el = document.documentElement;
    const observer = new MutationObserver(() => {
      detectTheme();
    });
    observer.observe(el, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [theme]);
  // const highlightedCode = useShikiHighlighter(code, "javascript", "dark-plus", {
  //   lineNumbers: true,
  // });
  // console.log(highlightedCode);
  return (
    <>
      <div className="code-header">
        <div className="title"></div>
        {useToggle && (
          <div className="be-tag label" onClick={() => setOpen(!open)}>
            <i className="icon left xi-code" />
            {open ? 'Close' : 'Code'}
          </div>
        )}
      </div>
      {open && (
        <ShikiHighlighter 
          language={language}
          theme={autoTheme}
          showLanguage={true}
          addDefaultStyles={true}
          as="div"
          style={{
            textAlign: "left",
            fontFamily: "monospace",
            lineHeight: "1.5",
            backgroundColor: "transparent !important"
          }}>
            {code?.trim()}
        </ShikiHighlighter>
      )}
      <style jsx="true">
        {`
          .code-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 5px;
            padding: 0 !important;
          }
          #shiki-container {
            background-color: var(--suf);
          }
          #shiki-container pre {
            background-color: transparent !important;
          }
        `}
      </style>
    </>
  );
}