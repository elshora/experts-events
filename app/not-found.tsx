import Link from "next/link";
import Image from "next/image";
export default function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center not-found">
      <Image src={"/images/404.png"} height={450} width={450} alt="404" />
      <Link href="/" className="btn bg-warning text-light">
        Return Home
      </Link>
    </div>
  );
}
