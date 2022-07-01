import React from 'react';
import { FilterInput } from './FilterStyle';
import { changeFilter } from 'redux/phonebook/phonebook-actions';
import { getValueFilter } from 'redux/phonebook/phonebook-selectors';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const filter = useSelector(getValueFilter);
  const dispatch = useDispatch();
  return (
    <>
      <FilterInput
        type="text"
        value={filter}
        onChange={e => {
          return dispatch(changeFilter(e.target.value));
        }}
      />
    </>
  );
};

export default Filter;
