import { 
  // useShikiHighlighter, 
  ShikiHighlighter 
} from "react-shiki";
import { useState, useEffect } from 'react'

export default function CodeBlock({
  code = '',
  language = 'javascript',
  theme = 'github-light',
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
          theme={theme}
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
            background-color: #f2f2f2;
          }
          #shiki-container pre {
            background-color: transparent !important;
          }
        `}
      </style>
    </>
  );
}