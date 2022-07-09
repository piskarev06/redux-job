import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import s from "./Filter.module.scss";
import { Card } from "../Card";
import { Badge } from "../Badge";
import { Stack } from "../Stack/Stack";
import { selectFilters } from "../../store/filters/filtersSelectors";
import { resetFilters, deleteFilter } from "../../store/filters/filtersActions";

export const Filter: FC = () => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  if (filters.length === 0) {
    return null;
  }

  return (
    <Card className={s.filter}>
      <div className={s.filter__wrapper}>
        <Stack>
          {filters.map((item) => (
            <Badge
              onClear={() => dispatch(deleteFilter(item))}
              key={item}
              variant="clearable"
            >
              {item}
            </Badge>
          ))}
        </Stack>

        <button onClick={() => dispatch(resetFilters)} className="link">
          Clear
        </button>
      </div>
    </Card>
  );
};
