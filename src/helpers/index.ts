export const normalizeData = <
  T extends Record<string | number | symbol, unknown>
>(
  data: T[],
  assignBy: string | number | symbol
) =>
  // Normalizes data to reduce read complexity (O(n) -> O(1))
  // @see: https://dev.to/danielpdev/normalize-your-complex-js-objects-21d9
  data.reduce((sum, item: T) => {
    if (!sum[item[assignBy] as string]) {
      sum[item[assignBy] as string] = [item];
      return sum;
    }

    sum[item[assignBy] as string].push(item);
    return sum;
  }, {} as Record<string, T[]>);

export const covertTimeToDate = (mmss: string) => {
  // Converts time (mm:ss) to date format
  const date = new Date();
  const [minutes, seconds] = mmss.split(":");

  date.setMinutes(+minutes);
  date.setSeconds(+seconds);

  return date;
};
