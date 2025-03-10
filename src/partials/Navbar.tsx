import {
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavMenu>
      <NavMenuItem href="/news/">News</NavMenuItem>
    </NavMenu>
  </Section>
);

export { Navbar };
