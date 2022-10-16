import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss';
const categoriesArr = [
    
    {
      "id": 1,
      "title": "HATS",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "JACKETS",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "SNEAKERS",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "WOMEN'S",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "MEN'S",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  
  ];


const Directory = ()=>{
    return (        
            <div className="directory-container">
                {categoriesArr.map((category)=>(
                <CategoryItem key={category.id} category={category}/>
                ))}
            </div>
        );
}
export default Directory;