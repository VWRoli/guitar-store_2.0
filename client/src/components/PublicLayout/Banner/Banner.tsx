import { Link } from 'react-router-dom';

const Banner = (): JSX.Element => {
  return (
    <div id="sale-banner">
      <div className="banner-placeholder"></div>
      <p>
        Check out our On Sale Porducts! <Link to="/onSale">Here!</Link>
      </p>
      <Link to="/dashboard" id="admin-btn">
        Admin Dashboard
      </Link>
    </div>
  );
};

export default Banner;
