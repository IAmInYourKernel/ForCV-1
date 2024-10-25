import { Nav } from "../(components)/Nav";
import { TicketForms } from "../(components)/TicketForms";

export default async function ticketPage({ params }: any) {
  return (
    <>
      <Nav />
      <TicketForms ticket={{ _id: "new" }} />
    </>
  );
}
