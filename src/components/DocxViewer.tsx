import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

interface DocxViewerProps {
  url: string;
  height?: number | string;
  className?: string;
}

const DocxViewer: React.FC<DocxViewerProps> = ({
  url,
  height = "h-full",
  className = "",
}) => {
  return (
    <div
      className={`w-full rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 ${className}`}
    >
      <DocViewer
        documents={[{ uri: url }]}
        pluginRenderers={DocViewerRenderers}
        style={{ height }}
        config={{ header: { disableHeader: true } }}
        className="rounded-xl"
      />
    </div>
  );
};

export default DocxViewer;
