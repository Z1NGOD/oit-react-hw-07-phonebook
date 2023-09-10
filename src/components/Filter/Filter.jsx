import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/slice';
import { FilterInput } from './Filter.styled';
import { Text } from 'ui/Text.styled';

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
