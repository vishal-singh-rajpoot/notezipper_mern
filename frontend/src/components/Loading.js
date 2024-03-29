import { Spinner } from "react-bootstrap";

const Loading = ({ size = 100}) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Spinner
          style={{
            width: size,
            height: size,
          }}
          animation="border"
        />
      </div>
    </div>
  );
}

export default Loading;