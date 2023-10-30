import Link from "next/link";

export default function Home() {
  return (
    <main className="landing container d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center fw-light">
          Welcome To Events / Experts App
        </h1>
        {/*eslint-disable-next-line @next/next/no-img-element
         */}
        <img
          className="img-fluid my-3"
          src={"./images/events-vector.svg"}
          alt="Events App"
        />
        <p className="d-flex gap-3 flex-column flex-md-row">
          <Link className="fs-4 text-capitalize main-button" href="/events">
            events page
          </Link>
          <Link className="fs-4 text-capitalize main-button" href="/experts">
            experts page
          </Link>
        </p>
      </div>
    </main>
  );
}
