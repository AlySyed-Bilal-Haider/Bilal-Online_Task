import React from "react";
import MkdSDK from "../utils/MkdSDK";
function Pagination() {
  let sdk = new MkdSDK();
  return (
    <div>
      <button>Next</button>
      <button>Previous</button>
    </div>
  );
}

export default Pagination;
