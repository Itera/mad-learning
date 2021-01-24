import React from 'react';

import MenuLink from './MenuLink';
import { Wrapper, Icon, Menu, MenuItem } from './styled';
import routes from 'src/config/routes';
import logo from 'src/assets/images/logo.png';

function Navbar() {
  return (
    <Wrapper>
      <Icon src={logo} alt="Itera logo" />
      <Menu>
        {routes.map(
          ({ path, label }) =>
            label && (
              <MenuItem key={path}>
                <MenuLink path={path} label={label} />
              </MenuItem>
            )
        )}
      </Menu>
    </Wrapper>
  );
}

export default Navbar;
