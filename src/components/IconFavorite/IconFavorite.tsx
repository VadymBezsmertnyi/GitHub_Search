import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import {
  Star as StarIcon,
  StarBorder as StarBorderIcon,
} from '@mui/icons-material';

import useStyles from './IconFavorite.styles';

interface IIconFavoriteProps {
  favorite: boolean;
  type: 'result' | 'details' | 'header' | 'hide';
  clickFavorite?: () => void;
}

const IconFavorite = ({
  favorite,
  type,
  clickFavorite = () => {},
}: IIconFavoriteProps) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const selectFavorite = () => {
    if (type === 'header') navigate('/favorites');
    else clickFavorite();
  };

  return (
    <IconButton
      onClick={selectFavorite}
      color="primary"
      aria-label="directions"
      className={classes[type]}
      data-testid={'test_component_icon_favorite'}
    >
      {favorite ? (
        <StarIcon
          data-testid={`test_icon_favorite_type_icon_${favorite}`}
          className={classes.starFavoriteOn}
        />
      ) : (
        <StarBorderIcon
          data-testid={`test_icon_favorite_type_icon_${favorite}`}
          className={classes.starFavoriteOff}
        />
      )}
    </IconButton>
  );
};

export default IconFavorite;
