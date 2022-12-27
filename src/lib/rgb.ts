export const calculateNextValues = (r_i: number, g_i: number, b_i: number) => {
  let r = r_i;
  let g = g_i;
  let b = b_i;
  if (r > 0 && b == 0) {
    r--;
    g++;
  }
  if (g > 0 && r == 0) {
    g--;
    b++;
  }
  if (b > 0 && g == 0) {
    r++;
    b--;
  }
  return { r, g, b };
};
