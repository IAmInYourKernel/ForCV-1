"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function TicketForms({ ticket }: any) {
  const EDITMODE = ticket && ticket._id === "new" ? false : true;

  //console.log("Are we getting some data: ", ticket.ticketData[0].title);

  const router = useRouter();
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "Not Started",
    category: "Software Problem",
  };

  useEffect(() => {
    if (EDITMODE) {
      setFormData({
        title: ticket.ticketData[0].title || "",
        description: ticket.ticketData[0].description || "",
        priority: ticket.ticketData[0].priority || 1,
        progress: ticket.ticketData[0].progress || 0,
        status: ticket.ticketData[0].status || "Not Started",
        category: ticket.ticketData[0].category || "Software Problem",
      });
    }
  }, [EDITMODE]);
  const [formData, setFormData] = useState(startingTicketData);
  // console.log("this is the form Data:", formData);

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(value);

    setFormData((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log("Ticket Data:", ticket);
    console.log("Ticket ID to Update:", ticket.ticketData[0]._id);
    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket.ticketData[0]._id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        console.error(
          `Failed to Update Ticket: ${res.status} - ${res.statusText}`
        );
        // Optionally handle specific error cases
        if (res.status === 404) {
          // Handle 404 Not Found
        } else if (res.status === 500) {
          // Handle 500 Internal Server Error
        }
        throw new Error(
          `Failed to Update Ticket: ${res.status} - ${res.statusText}`
        );
      }
    } else {
      const res = await fetch("api/Tickets", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        console.error("Failed to create Ticket:", await res.json());
        throw new Error("Failed to create Ticket");
      }
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center m-1">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
      >
        <h3>{EDITMODE ? "Updating Ticket" : "Create New Ticket"}</h3>
        <label htmlFor="">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        <label htmlFor="">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
        />
        <label htmlFor="">Category</label>
        <select
          name="category"
          id=""
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problems">Hardware Problems</option>
          <option value="Software Problems">Software Problems</option>
          <option value="Project">Project</option>
        </select>
        <label htmlFor="">Priority</label>
        <div>
          <input
            type="radio"
            id="priority"
            name="priority"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label htmlFor="">2</label>
          <input
            type="radio"
            id="priority-2"
            name="priority"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label htmlFor="">3</label>
          <input
            type="radio"
            id="priority-3"
            name="priority"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label htmlFor="">4</label>
          <input
            type="radio"
            id="priority-4"
            name="priority"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label htmlFor="">5</label>
          <input
            type="radio"
            id="priority-5"
            name="priority"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
        </div>
        <label htmlFor="">Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label htmlFor="">Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input type="submit" className="btn" value="Create Ticket" />
      </form>
    </div>
  );
}
