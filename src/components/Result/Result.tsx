import { Box } from '@mui/material';

import { ItemResult } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { getFullInfoUser } from 'reducers/reducer';
import { AppDispatch } from 'store/store';
import { IInitialState, TUser } from 'types/main';

import useStyles from './Result.styles';

interface IResultProps {
  items: TUser[];
}

const Result = ({ items }: IResultProps) => {
  const errorServer = useSelector((state: IInitialState) => state.error);
  const dispatch = useDispatch<AppDispatch>();
  const classes = useStyles();

  return (
    <Box
      data-testid={'test_component_result'}
      className={classes.resultContainer}
    >
      {items.map((item) => {
        if (item.bio === undefined && !errorServer)
          dispatch(getFullInfoUser({ user: item.login }));
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
