import { Route, Routes } from 'react-router-dom';
import {  useEffect } from "react";
import { useDispatch,  useSelector} from "react-redux";
import { categoriesMapSelector } from '../../store/categories/categories.selector';
import {setCategories} from "../../store/categories/categories.actions";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/categories.component';

import './shop.styles.scss';

const Shop = () => {
  console.log(">>>Shop run")
  const dispatch = useDispatch();
  // console.log(">>>Shop/categoriesMapSelector");

  // const categoriesArrr = useSelector(categoriesMapSelector);
  // console.log("Shop/categoriesArr",categoriesArrr)
  useEffect(()=>{
    console.log("->Shop/useEff run");
    
    const ref = async()=> {
      // if(Object.keys(categoriesArrr).length>0) {console.log("CateMap not change");return;};
        console.log("->Shop/useEf/getting category Array")
        const categoriesArr = await getCategoriesAndDocuments();
       console.log("Shop/useEF/bf dispatch")
        dispatch(setCategories(categoriesArr));
       console.log("Shop/useEf/aft dispatch")

    };
    ref();
    console.log("<-Shop/useff finished");
},[]); 
  console.log("<<<Shop finished")
  return (
      <Routes>
        <Route index element={<CategoriesPreview/>} />
        <Route  path='/:category'   element={<Category/>} />
      </Routes>
  );
};

export default Shop;
