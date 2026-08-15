import React from "react";
import { useForm } from "react-hook-form";
import { useWorkspaceForm } from "../hooks/useWorkspaceForm";
import {
  type UsageTypeData,
  usageTypeSchema,
} from "../schemas/workspaceSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Step1() {
  const { dispatch } = useWorkspaceForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UsageTypeData>({
    resolver: zodResolver(usageTypeSchema),
  });

  const onSubmit = (data: UsageTypeData) => {
    dispatch({ type: "UPDATE_USAGE", payload: data });
    dispatch({ type: "NEXT_STEP" });
  };
  return (
    <div className="max-w-md mx-auto my-12 p-10 rounded-xl shadow-lg bg-white font-sans text-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">How do you intend to use this platform?</h2>
        <label className="flex items-center p-5 border border-gray-200 rounded-lg cursor-pointer transition-all duration-200 mb-4 bg-white hover:bg-gray-50 has-[:checked]:bg-blue-50 has-[:checked]:border-blue-400">
          <input type="radio" value="personal" {...register("usageType")} className="mr-4 h-5 w-5 accent-blue-500" />
          Personal (Just Me)
        </label>
        <label className="flex items-center p-5 border border-gray-200 rounded-lg cursor-pointer transition-all duration-200 mb-4 bg-white hover:bg-gray-50 has-[:checked]:bg-blue-50 has-[:checked]:border-blue-400">
          <input type="radio" value="team" {...register("usageType")} className="mr-4 h-5 w-5 accent-blue-500" />
          Team (My Company)
        </label>
        {errors.usageType && <p className="text-red-600 text-sm -mt-2 mb-4">{errors.usageType.message}</p>}
        <button type="submit" className="w-full py-4 px-4 text-base font-semibold text-white bg-blue-500 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-blue-600">Next</button>
      </form>
    </div>
  );
}
