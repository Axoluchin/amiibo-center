import Link from "next/link";
import { Navbar, Text } from "@nextui-org/react";

const Header = () => {
  return (
    <Navbar isBordered variant="static">
      <Navbar.Brand>
        <Link href="/">
          <Text h2 style={{
            cursor: 'pointer'
          }}>Amiibo Center</Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link href="/">All Amiibos</Navbar.Link>
        <Navbar.Link href="/games" isDisabled>
          Game Series
        </Navbar.Link>
        <Navbar.Link href="/series" isDisabled>
          Series
        </Navbar.Link>
        <Navbar.Link href="/character" isDisabled>
          Character
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};

export default Header;
