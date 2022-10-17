import { Loading as NextUILoading } from "@nextui-org/react";

const Loading = ({ text }: { text: string }) => (
  <div
    style={{
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <NextUILoading
      loadingCss={{ $$loadingSize: "200px", $$loadingBorder: "20px" }}
    >
      {text}
    </NextUILoading>
  </div>
);

export default Loading;
