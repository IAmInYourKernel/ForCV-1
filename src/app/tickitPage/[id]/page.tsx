import { Nav } from "@/app/(components)/Nav";
import { TicketForms } from "@/app/(components)/TicketForms";

const getTicketById = async (id: any) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to get Ticket");
  }
  return res.json();
};

export default async function ticketPage({ params }: any) {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketData = {};
  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    console.log(updateTicketData);
  } else {
    updateTicketData = {
      id: "new",
    };
  }
  return (
    <>
      <Nav />
      <TicketForms ticket={updateTicketData} />
    </>
  );
}
