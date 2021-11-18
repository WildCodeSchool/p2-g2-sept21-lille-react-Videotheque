import { Link } from 'react-router-dom';
import './FilterButton.css';

function FilterButton() {
  return (
    <Link to="Categories/" className="filterButtonBlock">
      <button className="filterButton" type="button">
        Advanced Search
      </button>
    </Link>
  );
}

export default FilterButton;
