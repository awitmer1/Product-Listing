import {BsStarFill} from 'react-icons/bs'
import {BsStar} from 'react-icons/bs'
import {BsStarHalf} from 'react-icons/bs'

const StarRating = ({productRating}) => {
    
    function GetStars(productRating) {

        // Round to nearest half
        let rating = Math.round(productRating * 2) / 2;
        let output = [];
      
        // Append all the filled whole stars
        for (var i = rating; i >= 1; i--)
          output.push(<BsStarFill />);
      
        // If there is a half a star, append it
        if (i == .5) output.push(<BsStarHalf />);
      
        // Fill the empty stars
        for (let i = (5 - rating); i >= 1; i--)
          output.push(<BsStar />);
      
        return output.join('');
      }   


    return ( 
        <>
        <i><GetStars /></i>
        </>
     );
}
 
export default StarRating;