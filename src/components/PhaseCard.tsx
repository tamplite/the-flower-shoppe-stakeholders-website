// src/components/PhaseCard.tsx
import React, { Fragment } from 'react';

// Define the interface for a single project phase
interface Phase {
  id: string;
  title: string;
  executiveSummary: string;
  duration: string;
  essay: string;
  keyFeatures: string[];
  warnings: string[];
}

// PhaseCard component to display individual phase details
export default function PhaseCard({ phase }: { phase: Phase }) {
  return (
    <div id={phase.id} className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-flower-light-pink">
      <h3 className="text-2xl font-bold text-flower-green mb-3">{phase.title}</h3>
      <p className="text-flower-pink font-semibold mb-2">{phase.duration}</p>
      <p className="text-gray-700 mb-4">{phase.executiveSummary}</p>
      <p className="text-gray-600 italic mb-4">{phase.essay}</p>

      <h4 className="text-xl font-semibold text-flower-green mb-2">Key Features:</h4>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        {phase.keyFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      {phase.warnings.length > 0 && (
        <Fragment>
          <h4 className="text-xl font-semibold text-tres-red mb-2">Important Warnings:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {phase.warnings.map((warning, index) => (
              <li key={index} className="text-sm">{warning}</li>
            ))}
          </ul>
        </Fragment>
      )}
    </div>
  );
}
