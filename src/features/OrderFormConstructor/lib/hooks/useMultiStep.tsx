import { ReactElement, useCallback, useState } from 'react'
import { AnimatedWrapper } from '../../ui/AnimatedWrapper/AnimatedWrapper.tsx'

interface MultiStepResult {
    step: ReactElement
    next: () => void
    prev: () => void
    isLastStep: boolean
    isFirstStep: boolean
}

export const useMultiStep = (
    steps: ReactElement[],
    defaultStep = 0
): MultiStepResult => {
    const [currentStep, setCurrentStep] = useState(defaultStep)
    const [direction, setDirection] = useState<'next' | 'prev'>('next')

    const next = useCallback(() => {
        setCurrentStep((step) => {
            if (step + 1 > steps.length - 1) {
                return step
            }
            setDirection('next')

            return step + 1
        })
    }, [steps.length])

    const prev = useCallback(() => {
        setCurrentStep((step) => {
            if (step - 1 < 0) {
                return step
            }
            setDirection('prev')

            return step - 1
        })
    }, [])

    return {
        step: (
            <AnimatedWrapper key={currentStep} direction={direction}>
                {steps[currentStep]}
            </AnimatedWrapper>
        ),
        next,
        prev,
        isLastStep: currentStep === steps.length - 1,
        isFirstStep: currentStep === 0,
    }
}
