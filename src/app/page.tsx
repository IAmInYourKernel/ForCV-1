import Image from "next/image";
import { TicketCard } from "./(components)/TIcketCard";
import { PriorityDisplay } from "./(components)/PriorityDisplay";
import { Nav } from "./(components)/Nav";


const getTickets = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
export default async function Home() {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(
      tickets?.map(({ category }: any) => {
        return category;
      })
    ),
  ];

  return (
    <>
      <TicketCard />
    </>
  );
}
