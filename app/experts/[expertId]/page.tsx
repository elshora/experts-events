import getExpert from "@/app/lib/getExpert";
import type { Metadata } from "next";
import ExpertFullData from "./components/ExpertFullData";
type Params = {
  params: {
    expertId: string;
  };
};

export async function generateMetadata({
  params: { expertId },
}: Params): Promise<Metadata> {
  const expertData: Promise<EXPERT> = getExpert(expertId);
  const expert: EXPERT = await expertData;

  return {
    title: `${expert?.firstName} ${expert?.lastName}`,
    description: `This is the page of ${expert?.bio}`,
  };
}

export default async function expertPage({ params: { expertId } }: Params) {
  const expertData: Promise<EXPERT> = await getExpert(expertId);
  const expert = await expertData;
  return (
    <section className="container my-5">
      <ExpertFullData expert={expert} />
    </section>
  );
}
