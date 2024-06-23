export function stepProgression(num: number, current: number) {
  if (num < current) return 0;
  else if (num === current) return 1;
  else return 2;
}

export function calculatePosition(currentStep: number) {
  let x;
  const y = currentStep * 0.5 + 1.3;
  let z;
  switch (currentStep % 12) {
    case 0:
      x = -1.7;
      z = -0.5;
      break;
    case 1:
      x = -1.5;
      z = 0.5;
      break;
    case 2:
      x = -1.2;
      z = 1.5;
      break;
    case 3:
      x = -0.3;
      z = 1.7;
      break;
    case 4:
      x = 0.5;
      z = 1.8;
      break;
    case 5:
      x = 1.3;
      z = 1.1;
      break;
    case 6:
      x = 1.7;
      z = 0.4;
      break;
    case 7:
      x = 1.8;
      z = -0.5;
      break;
    case 8:
      x = 1.0;
      z = -1.2;
      break;
    case 9:
      x = 0.5;
      z = -1.8;
      break;
    case 10:
      x = -0.6;
      z = -1.8;
      break;
    case 11:
      x = -1.2;
      z = -1.2;
      break;
  }
  return [x, y, z];
}
