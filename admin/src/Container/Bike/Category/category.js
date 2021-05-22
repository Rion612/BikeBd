import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../../Actions';

const Ctaegory = () => {
const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getCategory());

  }, []);
  const bikeCategories = useSelector(state => state.category.categories);
    return (
        <div className="category">
            <ul>
                {bikeCategories.map((item,index)=>{
                    return(
                        <li key={index}>{item.name}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Ctaegory;