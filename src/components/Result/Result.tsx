import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';

import { ItemResult } from 'components';
import { getFullInfoUser } from 'reducers/reducer';
import { AppDispatch } from 'store/store';
import { TUser } from 'types/main';

import useStyles from './Result.styles';

interface IResultProps {
  items: TUser[];
  errorServer: boolean;
}

const Result = ({ items, errorServer }: IResultProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const classes = useStyles();

  return (
    <Box className={classes.resultContainer}>
      {items.map((item) => {
        if (item.bio === undefined && !errorServer)
          dispatch(getFullInfoUser({ user: item.login }));
        console.log(item, !errorServer);
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
