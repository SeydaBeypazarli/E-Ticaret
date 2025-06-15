// src/layout/PageContent.jsx
import React from "react";

const PageContent = ({ children }) => {
  return (
    <main className="pt-20 pb-10 px-4 md:px-8 bg-background min-h-[calc(100vh-160px)]">
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </main>
  );
};

export default PageContent;
