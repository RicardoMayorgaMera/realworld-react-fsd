/**
 * Transition Utilities.
 */
import { Transition } from '@mui/system';

export function fadeIn() {
  return {
    transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
    '&': {
      opacity: 1,
      transform: 'scale(1)',
    },
  };
}

export function scaleAndElevate() {
  return {
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&': {
      WebkitTransform: 'scale(1.02)', // For Safari
      transform: 'scale(1.02)',
    },
  };
}
export function noLayoutShift() {
  return {
    transitionTimingFunction: 'step-end',
  };
}