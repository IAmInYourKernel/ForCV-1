import Ticket from "@/app/(models)/Ticket";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(request: any, { params }: any) {
  try {
    const { id } = params;
    const deletedData = await Ticket.findByIdAndDelete(id);
    console.log("====================================");
    console.log(deletedData);
    console.log("====================================");
    return NextResponse.json({ message: "Successfully deleted fun koro abar" });
  } catch (error) {
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
}

export async function GET(req: NextRequest, { params }: any) {
  try {
    const { id } = params;
    const ticketData = await Ticket.find({ _id: id });
    return NextResponse.json({ ticketData }, { status: 200 });
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
}
export async function PUT(request: any, { params }: any) {
  try {
    const { id } = params;
    console.log("Received request to update ticket with ID:", id);
    const body = await request.json();

    console.log("this is the new TicketData", body);

    // Assuming you have a Ticket model
    const updatedTicket = await Ticket.findByIdAndUpdate(
      id,
      {
        ...body,
        // Spread the properties of ticketData
      },
      { new: true }
    );

    console.log("Updated Ticket:", updatedTicket);
    if (!updatedTicket) {
      // Handle if the ticket with the given ID is not found
      return NextResponse.json(
        { message: "Ticket not found" },
        { status: 404 }
      );
    }

    console.log("Updated Ticket:", updatedTicket);

    return NextResponse.json({ message: "Successfully updated ticket" });
  } catch (error) {
    console.error("Error updating ticket:", error);
    return NextResponse.json(
      { message: "Error updating ticket" },
      { status: 500 }
    );
  }
}
