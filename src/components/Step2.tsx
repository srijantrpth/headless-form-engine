import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type WorkspaceDetailsData,
  workspaceDetailsSchema,
} from "../schemas/workspaceSchema";
import { useWorkspaceForm } from "../hooks/useWorkspaceForm";

const Step2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WorkspaceDetailsData>({
    resolver: zodResolver(workspaceDetailsSchema),
  });
  const { dispatch } = useWorkspaceForm();
  const [showAdvanced, setShowAdvanced] = useState(false);

  const onSubmit = (data: WorkspaceDetailsData) => {
    dispatch({ type: "UPDATE_WORKSPACE", payload: data });
    dispatch({ type: "NEXT_STEP" });
  };

  return (
    <div className="max-w-md mx-auto my-12 p-10 rounded-xl shadow-lg bg-white font-sans">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-semibold mb-8 text-gray-800 text-center">Enter your workspace details</h1>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2 text-left">Workspace Name</label>
          <input type="text" {...register("workspaceName")} className="w-full py-3 px-4 text-base border border-gray-200 rounded-lg mb-6 box-border" placeholder="e.g. Acme Inc." />
          {errors.workspaceName && <p className="text-red-600 text-sm -mt-4 mb-4 text-left">{errors.workspaceName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2 text-left">Workspace URL</label>
          <input type="text" {...register("workspaceUrl")} className="w-full py-3 px-4 text-base border border-gray-200 rounded-lg mb-6 box-border" placeholder="e.g. acme.platform.com" />
          {errors.workspaceUrl && <p className="text-red-600 text-sm -mt-4 mb-4 text-left">{errors.workspaceUrl.message}</p>}
        </div>
        <div className="flex flex-col gap-3 mt-6">
          <button type="submit" className="py-4 px-4 text-base font-semibold text-white bg-blue-500 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-blue-600">Next Step</button>
          <button type="button" className="py-4 px-4 text-base font-semibold text-gray-600 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-gray-100" onClick={() => { dispatch({ type: "PREV_STEP" }); }}>
            Previous Step
          </button>
        </div>
      </form>
      <div className="mt-8 text-center">
        <button onClick={() => setShowAdvanced((prev) => !prev)} className="w-full py-4 px-4 text-base font-semibold text-gray-600 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-gray-100">
          {showAdvanced ? "Hide" : "Show"} Advanced Settings
        </button>
        {showAdvanced && <h4 className="mt-4 text-gray-600">Advanced settings unlocked!</h4>}
      </div>
    </div>
  );
};

export default Step2;
