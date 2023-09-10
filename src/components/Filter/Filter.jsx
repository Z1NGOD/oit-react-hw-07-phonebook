import { useSelector, useDispatch } from 'react-redux';

import { FilterInput } from './Filter.styled';
import { Text } from 'ui/Text.styled';
import { changeFilter } from 'redux/filterSlice/slice';

function Filter() {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChangeHandler = e => {
    const normalizedFilter = e.target.value.toLowerCase().trim();
    dispatch(changeFilter(normalizedFilter));
  };
  return (
    <>
      <Text>Find Contact by Name</Text>
      <FilterInput value={filter} onChange={onChangeHandler} />
    </>
  );
}

export default Filter;
