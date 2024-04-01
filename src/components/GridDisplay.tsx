import React, { ReactNode } from "react";

interface GridDisplayProps {
  data: any[];
  renderItem: (item: any) => ReactNode;
}

export const GridDisplay: React.FC<GridDisplayProps> = ({
  data,
  renderItem,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 3.5xl:grid-cols-4 gap-10">
    {data.map(renderItem)}
  </div>
);
