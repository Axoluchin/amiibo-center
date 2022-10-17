import { Navbar, Text } from "@nextui-org/react";
import Link from "next/link";

const Header = () => {
    return(
        <Navbar isBordered variant="static">
            <Navbar.Brand>
                <Text h2>Amiibo Center</Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        </Navbar>
    )
}

export default Header
