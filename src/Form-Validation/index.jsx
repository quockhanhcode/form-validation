import React, { useState } from "react";
import ActionForm from "./ActionForm";
import ListStudent from "./ListStudent";
import Search from "./Search";

export default function Form() {
  const [showEdit, setShowEdit] = useState(true);
  return (
    <div>
      <ActionForm showBtn={showEdit} setShowEdit={setShowEdit} />
      <Search />
      <ListStudent setShowBtn={setShowEdit} />
    </div>
  );
}
