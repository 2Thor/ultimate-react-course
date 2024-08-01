import { useSearchParams, useNavigate } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>
        Position: {lat},{lng}
      </h1>
    </div>
  );
}

export default Map;
