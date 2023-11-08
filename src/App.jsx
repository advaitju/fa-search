import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solid from '@fortawesome/free-solid-svg-icons';
import * as regular from '@fortawesome/free-regular-svg-icons';
import * as brands from '@fortawesome/free-brands-svg-icons';
import { useMemo, useState } from 'react';

const icons = [].concat(
  Object.values(solid),
  Object.values(regular),
  Object.values(brands)
);

function App() {
  const [search, setSearch] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const iconsElements = useMemo(() => {
    if (search.length > 0 && search.length < 2) return;
    const shownIcons = [];

    icons.forEach((icon, index) => {
      if (search.length > 0 && !icon?.iconName?.includes(search)) return;

      shownIcons.push(
        <div key={index}>
          <FontAwesomeIcon icon={icon} />
        </div>
      );
    });

    return shownIcons;
  }, [search]);

  return (
    <>
      <div className="search">
        <p>Search</p>
        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value.toLowerCase().replace(/ /g, '-'))
          }
          placeholder="arrow up, calendar, envelope, twitter"
        />
      </div>
      <div className="icons">{iconsElements}</div>
    </>
  );
}

export default App;
