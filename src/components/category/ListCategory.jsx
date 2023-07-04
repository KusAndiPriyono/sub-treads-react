/* eslint-disable react/no-array-index-key */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import { useEffect } from 'react';
import { asyncPopulateUsersAndThreads } from '../../states/shared/action';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import ItemCategory from './ItemCategory';

function ListCategory({ onChangeCategory }) {
  const [selected, setSelected] = useInput('');
  const { threads = [] } = useSelector((state) => state);
  const categoryThread = threads.map(({ category }) => category);
  const uniqueCategoryThread = [...new Set(categoryThread)];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onSelectCategory = (e) => {
    onChangeCategory(e);
    setSelected(e);
  };

  const unSelectCategory = () => {
    onChangeCategory('');
    setSelected('');
  };

  return (
    <Box>
      <Typography fontSize={20} sx={{ mt: 2, ml: 2 }}>
        Category Popular
      </Typography>
      {uniqueCategoryThread.map((category, key) => (
        <ItemCategory
          key={key}
          category={category}
          onSelect={onSelectCategory}
          unSelect={unSelectCategory}
          selected={selected}
        />
      ))}
    </Box>
  );
}

ListCategory.propTypes = {
  onChangeCategory: PropTypes.func.isRequired,
};

export default ListCategory;
