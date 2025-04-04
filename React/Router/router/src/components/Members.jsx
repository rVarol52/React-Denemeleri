import React from "react";
import { useSearchParams } from "react-router-dom";

function Members() {
  const [searchParams, setSeatchParams] = useSearchParams();
  return (
    <>
      <div>Members</div>
      <button onClick={() => setSeatchParams({ filter: "active" })}>
        Aktif Üyeler
      </button>
      <button onClick={() => setSeatchParams()}>Tüm Üyeler</button>
    </>
  );
}

export default Members;
