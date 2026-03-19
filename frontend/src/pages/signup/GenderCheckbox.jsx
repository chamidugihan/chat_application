import React from "react";

function GenderCheckbox() {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <spna className="label-text">Male</spna>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
     <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <spna className="label-text">female</spna>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
