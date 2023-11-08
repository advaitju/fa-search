import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as allIcons from '@fortawesome/free-solid-svg-icons';
import { useMemo, useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [icons, setIcons] = useState(Object.values(allIcons));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const iconsElements = useMemo(() => {
    if (search.length < 2) return;

    return icons.map((icon, index) => {
      const found = icon?.iconName?.includes(search);
      if (!found) return;

      return (
        <div key={index}>
          <FontAwesomeIcon icon={icon} />
        </div>
      );
    });
  }, [search]);

  return (
    <div>
      <p>Search</p>
      <input
        value={search}
        onChange={(e) =>
          setSearch(e.target.value.toLowerCase().replace(/ /g, '-'))
        }
        placeholder="Example: arrow, calendar, envelope"
      />
      <div className="icons">{iconsElements}</div>
    </div>
  );
}

export default App;
