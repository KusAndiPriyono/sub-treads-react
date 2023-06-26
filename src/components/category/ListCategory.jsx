import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import { useEffect } from 'react';
import { asyncPopulateUsersAndThreads } from '../../states/shared/action';
import { Typography } from '@mui/material';
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
    <header>
      <Typography>Category Popular</Typography>
      {uniqueCategoryThread.map((category, key) => (
        <ItemCategory
          key={key}
          category={category}
          onSelect={onSelectCategory}
          unSelect={unSelectCategory}
          selected={selected}
        />
      ))}
    </header>
  );
}

ListCategory.propTypes = {
  onChangeCategory: PropTypes.func.isRequired,
};

export default ListCategory;
