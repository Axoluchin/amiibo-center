import { Navbar, Text } from "@nextui-org/react";

const Header = () => {
  return (
    <Navbar isBordered variant="static">
      <Navbar.Brand>
        <Text h2>Amiibo Center</Text>
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
