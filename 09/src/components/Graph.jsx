import { BarChart } from '@mui/x-charts/BarChart';

export const Graph = ({ population }) => {
  if (!Array.isArray(population)) {
    return null;
  }

  const years = population.map((o) => String(o.year));
  const values = population.map((o) => o.value);

  return (
    <BarChart



      height={600}
      xAxis={[{ data: years }]}
      series={[{ data: values }]}
    />
  )
}
