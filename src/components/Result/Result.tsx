import { Box } from '@mui/material';

import { ItemResult } from 'components';
import { TUser } from 'types/main';

import useStyles from './Result.styles';

interface IResultProps {
  items: TUser[];
}

const Result = ({ items }: IResultProps) => {
  const classes = useStyles();

  return (
    <Box data-testid={'test_component_result'} className={classes.resultContainer}>
      {items.map((item) => {
        return (
          <ItemResult
            key={`result_${item.id}`}
            user={item}
            favorite={Boolean(item.favorite)}
          />
        );
      })}
    </Box>
  );
};

export default Result;
