import classes from "./Table.module.css";

export const Table = ({ rows, setCurrentRow }) => {
  const handleRowClick = () => {
  }

  const renderRow = (row) => {
    return (
      <tr
        className={classes.tr}
        key={row.id}
        onClick={handleRowClick}
      >
        <td className={classes.td}>{row.name}</td>
        <td className={classes.td}>{row.city}</td>
      </tr>
    );
  };
  return (
    <table className={classes.table}>
      <tbody>{rows.map(renderRow)}</tbody>
    </table>
  );
};
