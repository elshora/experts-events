import { Spinner } from "react-bootstrap";
export default function Loading() {
  return (
    <div className="spinner">
      <Spinner animation="border" role="status" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
