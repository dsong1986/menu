'use client'
import { createContext } from "react";

import Container from "@/app/components/Container";
// styles
import css from "./BusinessApp.module.scss";
import "../styles/reset.scss"
import "../styles/utilities.scss";
import "../styles/global.scss";

// Hooks
import { useCurrentStep } from "../hooks/useCurrentStep"
import { useMobile } from "../hooks/useMobile";
import { useFormData } from "../hooks/useFormData";


// Context
export const StepChangeContext = createContext<HandleStepChangeType | null>(null);

//Types
import { HandleStepChangeType } from "../types";

//Components
import Indicator from "../Indicator/Indicator";
import UniqueSteps from "./UniqueSteps/UniqueSteps";
import StepControllers from "./StepControllers/StepControllers";

const BusinessApp = () => {
    const { currentStep, isCurrentStep, handleStepChange } = useCurrentStep();
    const { isMobile } = useMobile();
    const {
        register,
        handleSubmit,
        errors,
        firstStepFormData,
        billingPlan,
        regularityObj,
        handleMultipleInputs,
        handleSetBillingPlan,
        handleRegularity,
        regularity,
        handleAddOns,
        addOns,
    } = useFormData();

    const WrapperTag = currentStep < 5 ? "form" : "div";
    const bottomMobileNav = isMobile && !isCurrentStep(5);

    return (
        <Container>
        <StepChangeContext.Provider value={handleStepChange}>
          
            <main  className={css.app}>
                <Indicator currentStep={currentStep} />
                <WrapperTag
                    className={css.stepsWrapper}
                    onSubmit={handleSubmit(() => handleStepChange(1))}
                    aria-live="polite"
                >
                    <UniqueSteps
                        currentStep={currentStep}
                        register={register}
                        errors={errors}
                        firstStepFormData={firstStepFormData}
                        billingPlan={billingPlan}
                        regularityObj={regularityObj}
                        handleMultipleInputs={handleMultipleInputs}
                        handleSetBillingPlan={handleSetBillingPlan}
                        handleRegularity={handleRegularity}
                        regularity={regularity}
                        handleAddOns={handleAddOns}
                        addOns={addOns}
                        isMobile={isMobile}
                    />
                </WrapperTag>
      
            </main>

        </StepChangeContext.Provider>
        </Container>
    )
}

export default BusinessApp