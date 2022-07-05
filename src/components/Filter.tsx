import React, { FC } from "react";

import { Card } from "./Card";
import { Badge } from "./Badge";
import { Stack } from "./Stack";

export const Filter: FC = () => {
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          <Badge variant="clearable">Frontend</Badge>
          <Badge variant="clearable">Backend</Badge>
          <Badge variant="clearable">React</Badge>
        </Stack>

        <button className="link">Clear</button>
      </div>
    </Card>
  );
};
