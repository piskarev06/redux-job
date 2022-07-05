import React, { FC } from "react";

import s from "./Filter.module.scss";

import { Card } from "../Card";
import { Badge } from "../Badge";
import { Stack } from "../Stack/Stack";

export const Filter: FC = () => {
  return (
    <Card className={s.filter}>
      <div className={s.filter__wrapper}>
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
