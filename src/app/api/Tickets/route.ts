import Ticket from "../../(models)/Ticket";
import { NextResponse, NextRequest } from "next/server";
import { connect } from "@/app/(models)/dbConfig";

connect();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const response = await Ticket.create(body);
    console.log(response);
    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
