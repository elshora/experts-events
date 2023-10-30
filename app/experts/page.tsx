import { Metadata } from "next";
import getExperts from "../lib/getExperts";
import DataTable from "./components/DataTable";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Experts",
};
export default async function expertPage() {
  const data: Promise<EXPERT[]> = getExperts();
  const experts = await data;
  const content = (
    <section className="container">
      <Suspense>
        <DataTable experts={experts} />
      </Suspense>
    </section>
  );
  return content;
}
