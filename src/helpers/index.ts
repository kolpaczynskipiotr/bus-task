export const normalizeData = <
  T extends Record<string | number | symbol, unknown>
>(
  data: T[],
  assignBy: string | number | symbol
) =>
  data.reduce((sum, item: T) => {
    if (!sum[item[assignBy] as string]) {
      sum[item[assignBy] as string] = [item];
      return sum;
    }

    sum[item[assignBy] as string].push(item);
    return sum;
  }, {} as Record<string, T[]>);

export const covertTimeToDate = (mmss: string) => {
  const date = new Date();
  const [minutes, seconds] = mmss.split(":");

  date.setMinutes(+minutes);
  date.setSeconds(+seconds);

  return date;
};
