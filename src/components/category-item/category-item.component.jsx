import './category-item.styles.scss';
import { Link } from 'react-router-dom';

const CategoryItem = ({category}) => {
    const {imageUrl, title} = category;
    const fixedTitle = title.replace("'","");
    return (
     
      <Link  className="category-container" to={`/shop/${fixedTitle.toLowerCase()}`} >
                <div className='background-image' style = {{backgroundImage:`url(${imageUrl})`}} />
                <div className="category-body-container">
                  <h2>{title}</h2>
                  <p>Shop now</p>
                </div>
      </Link>
        
    );
};

export default CategoryItem;


