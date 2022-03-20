/** @format */

import { Link } from 'react-router-dom';

const otherPage = () => {
  return (
    <div>
      I am some other otherPage
      <Link to={'/'}>Go back home</Link>
    </div>
  );
};

export default otherPage;
