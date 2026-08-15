import { useEffect } from "react";
import { useWorkspaceForm } from "./hooks/useWorkspaceForm";
import { useSearchParams } from "react-router-dom";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";

export default function App() {
  const { state, dispatch } = useWorkspaceForm();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ step: state.currentStep.toString() });
  }, [state.currentStep, setSearchParams]);

  useEffect(() => {
    const urlStep = searchParams.get("step");
    if (urlStep) {
      dispatch({
        type: "SET_STEP",
        payload: parseInt(urlStep),
      });
    }
  }, []);

  const renderStep = () => {
    switch (state.currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      default:
        return <Step1 />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {renderStep()}
    </div>
  );
}
