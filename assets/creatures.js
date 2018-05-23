export const plant = config => {
  const { color, size, photosynthesis } = config || {};
  return {
    type: 'plant',
    color: color || [0, 120, 0],
    size: size || 10,
    initialEnergy: 5,
    maxEnergy: 10,
    wait() {
      this.energy += photosynthesis || 1;
    },
    move: false,
    reproduceLv: 0.65
  };
};
export const brute = config => {
  const { color } = config || {};
  return {
    type: 'brute',
    color: color || [0, 255, 255],
    maxEnergy: 50,
    initialEnergy: 10,
    size: 20
  };
};
export const bully = config => {
  const { color } = config || {};
  return {
    type: 'bully',
    color: color || [241, 196, 15],
    initialEnergy: 20,
    reproduceLv: 0.6,
    sustainability: 3
  };
};