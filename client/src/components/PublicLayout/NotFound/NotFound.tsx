import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = (): JSX.Element => {
  return (
    <section id="error-page">
      <h1>
        <FaExclamationTriangle />
        404 Page Not Found
      </h1>

      <h2>Sorry, we couldn't find that page.</h2>

      <button type="button" className="btn">
        <Link to="/">Back Home</Link>
      </button>
    </section>
  );
};

export default NotFound;
