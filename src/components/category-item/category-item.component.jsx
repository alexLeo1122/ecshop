// import './category-item.styles.scss';
// import { Link } from 'react-router-dom';
import {BackgroundImage, CategoryBodyContainer,CategoryContainer} from './category-item.styles'


const CategoryItem = ({category}) => {
    const {imageUrl, title} = category;
    const fixedTitle = title.replace("'","");
    return (     
      <CategoryContainer to={`/shop/${fixedTitle.toLowerCase()}`} >
                <BackgroundImage imageUrl={imageUrl} />
                <CategoryBodyContainer>
                  <h2>{title}</h2>
                  <p>Shop now</p>
                </CategoryBodyContainer>
      </CategoryContainer>        
    );
};

export default CategoryItem;


