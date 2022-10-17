import { Spacer, Text } from "@nextui-org/react"

const NotFound = () => (
    <div
    style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column'
      }}
    >
        <Text h2>Page not found / no avalible</Text>
        <Spacer/>
        <Text small>For now... 🤭</Text>
    </div>
)

export default NotFound
