import React, { Suspense } from "react";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full overflow-hidden relative lg:p-32 sm:p-16 p-8">
      <div className="h-full w-full">
        <Suspense fallback={<div>Another loading...</div>}>{children}</Suspense>
      </div>
    </div>
  );
};

export default PageContainer;
