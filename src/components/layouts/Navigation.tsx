import { Navbar, ScrollArea } from '@mantine/core';

export default function Navigation() {
  return (
    <Navbar p="xs" width={{ sm: 300, lg: 400, base: 100 }}>
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {/* scrollable content here */}
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Categories</li>
          <li>Stock</li>
          <li>Settings</li>
        </ul>
      </Navbar.Section>

      <Navbar.Section>Edit Profile</Navbar.Section>
    </Navbar>
  );
}
