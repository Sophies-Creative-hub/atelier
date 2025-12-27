import React from 'react';
import { CourseStatus } from '../types';

interface Props {
  status: CourseStatus;
}

const WatercolorBadge: React.FC<Props> = ({ status }) => {
  let bgClasses = '';
  let textClasses = '';
  let label = '';

  switch (status) {
    case CourseStatus.AVAILABLE:
      bgClasses = 'bg-sage-200 border-sage-300';
      textClasses = 'text-sage-900';
      label = 'Freie Plätze';
      break;
    case CourseStatus.WAITLIST:
      bgClasses = 'bg-orange-100 border-orange-200';
      textClasses = 'text-orange-800';
      label = 'Warteliste';
      break;
    case CourseStatus.SOLD_OUT:
      bgClasses = 'bg-stone-200 border-stone-300';
      textClasses = 'text-stone-500';
      label = 'Ausgebucht';
      break;
  }

  return (
    <span className={`
      inline-block px-3 py-1 rounded-full border 
      font-hand text-lg leading-none transform -rotate-2
      shadow-sm
      ${bgClasses} ${textClasses}
    `}>
      {label}
    </span>
  );
};

export default WatercolorBadge;