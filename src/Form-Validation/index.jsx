import React from "react";
import ActionForm from "./ActionForm";
import ListStudent from "./ListStudent";
import Search from "./Search";

export default function Form() {
  return (
    <div>
      <ActionForm />
      <Search />
      <ListStudent />
    </div>
  );
}
