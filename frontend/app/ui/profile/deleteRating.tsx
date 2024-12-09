// "use client";

import React from "react";

import { TrashIcon } from "lucide-react";

import { handleDelete } from "@/app/utils/actions";

const DeleteRating = ({ id }: { id: string }) => {
  const handleDeleteWithID = handleDelete.bind(null, id);
  return (
    <form action={handleDeleteWithID}>
      <button className="flex items-center">
        <TrashIcon
          className="text-red/80 hover:text-red transition-colors duration-300 cursor-pointer"
          size={18}
        />
      </button>
    </form>
  );
};

export default DeleteRating;
