import Table from "rc-table";
import { useFetch } from "../../services/api";
import loadingGif from "../../assets/gifs/Spinner-1s-200px.gif";
import "./visit.css";
const Visit = () => {
  const { loading, data } = useFetch("visits");

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

const List = ({ data }) => {
  const countryObj = {};

  data.map((element) => {
    countryObj[element.country] = countryObj[element.country] + 1 || 1;
  });

  const columns = [
    {
      title: "IP Address",
      dataIndex: "ipAddress",
      key: "_id",
      width: 1000,
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "_id",
      width: 800,
    },
    {
      title: "Date/Time Visit",
      dataIndex: "createdAt",
      key: "_id",
      width: 800,
    },
  ];
  return (
    <>
      <div className='container'>
        <div style={{ textAlign: "center" }}>
          <h1>VISITS</h1>
          <h3>Number of visits: {data.length}</h3>
        </div>
        <hr />
        <pre>{JSON.stringify(countryObj, undefined, 2)}</pre>
        <hr />
        <Table columns={columns} data={data} style={{ textAlign: "center" }} />
        <hr />
      </div>

      {/* <ul style={{ margin: "2em 2em" }}>
        {data.map((visit) => {
          const { country, ipAddress, _id, createdAt } = visit;
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
              <h4>Country: {country} </h4>
              <h4>Ip Address: {ipAddress}</h4>
              <h4>When: {new Date(createdAt).toString()}</h4>
            </li>
          );
        })}
      </ul> */}
    </>
  );
};

export default Visit;
