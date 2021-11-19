import './FilterButton.css';
import { Link } from 'react-router-dom';

function FilterButton() {
  return (
    <Link to="/Categories">
      <div className="filterButtonBlock">
        <button className="filterButton" type="button">
          Advanced Search
        </button>
      </div>
    </Link>
  );
}

export default FilterButton;
