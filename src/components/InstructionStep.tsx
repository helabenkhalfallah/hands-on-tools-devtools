import React from 'react';

interface InstructionStepProps {
    step: {
        number: number;
        step: string;
    };
}

const InstructionStep: React.FC<InstructionStepProps> = ({ step }) => (
    <div className="instruction-step">
        <span className="step-number">{step.number}</span>
        <p>{step.step}</p>
    </div>
);

export default InstructionStep;
