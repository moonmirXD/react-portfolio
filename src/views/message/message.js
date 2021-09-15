import { useFetch } from "../../services/api";
import loadingGif from "../../assets/gifs/Spinner-1s-200px.gif";
const Message = () => {
  const { loading, data } = useFetch("contacts");
  if (loading) {
    return (
      <>
        <div
          style={{ display: "grid", placeContent: "center", height: "100vh" }}
        >
          <img src={loadingGif} alt='' />
        </div>
      </>
    );
  } else {
    return (
      <>
        <List data={data} />
      </>
    );
  }
};

export default Message;

const List = ({ data }) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>MESSAGES</h1>
        <h3>Number of message: {data.length}</h3>
      </div>
      <ul style={{ margin: "2em 2em" }}>
        {data.map((visit) => {
          const { country, ipAddress, _id, createdAt, email, message, rating } =
            visit;

          return (
            <li
              key={_id}
              style={{
                border: "1px solid black",
                padding: "1em",
                margin: "1em auto",
                marginBottom: "1em",
                maxWidth: "700px",
                backgroundColor: "#bae8e8",
                color: "#272343",
                borderRadius: "2em",
              }}
            >
              <h4>Email: {email} </h4>
              <h4>Message: {message} </h4>
              <h4>Rating: {rating} </h4>
              <h4>Country: {country} </h4>
              <h4>Ip Address: {ipAddress}</h4>
              <h4>When: {new Date(createdAt).toString()}</h4>
            </li>
          );
        })}
      </ul>
    </>
  );
};
