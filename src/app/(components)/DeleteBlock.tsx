"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export function DeleteBlock({ id }: any) {
  const router = useRouter();

  const deleteFunction = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      console.log("Deletion successful");
      router.refresh();
      console.log("Page refreshed");
    }
  };

  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-400 hover:cursor-pointer hover:text-red-200 size-4"
      onClick={deleteFunction}
    />
  );
}
