import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as allIcons from '@fortawesome/free-solid-svg-icons';
import { useMemo, useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [icons, setIcons] = useState(Object.values(allIcons));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const iconsElements = useMemo(() => {
    if (search.length < 3) return;

    return icons.map((icon, index) => {
      const found = icon?.iconName?.includes(
        search.toLowerCase().replace(/ /g, '-')
      );
      console.log(icon?.iconName, found);
      // eslint-disable-next-line no-extra-boolean-cast
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
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Example: arrow, calendar, envelope"
      />
      <div className="icons">{iconsElements}</div>
    </div>
  );
}

export default App;
