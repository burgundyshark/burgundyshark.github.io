export const plant = {
  type: 'plant',
  color: [0, 120, 0],
  size: 10,
  initialEnergy: 5,
  maxEnergy: 20,
  wait: function() {
    this.energy += 1;// photosynthesis :)
  },
  move: false,
  reproduceLv: 0.65
};
export const brute = {
  type: 'brute',
  color: [0, 255, 255],
  maxEnergy: 50,
  initialEnergy: 10,
  size: 20
};
export const bully = {
  type: 'bully',
  color: [241, 196, 15],
  initialEnergy: 20,
  reproduceLv: 0.6,
  sustainability: 3
};