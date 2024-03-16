import { cn } from "@/lib/utils";

export default function DataTable({
  cols,
  data,
  wrapperClassName,
  tableClassName,
  theadClassName,
  theadTrClassName,
  tbodyClassName,
  tbodyTrClassName,
  handleTableRowClick,
}) {
  return (
    <div
      className={cn(
        "overflow-auto rounded border [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar]:h-[8px]",
        wrapperClassName
      )}
    >
      <table className={cn("w-full text-left text-sm", tableClassName)}>
        <thead className={cn("border-b bg-accent", theadClassName)}>
          <tr className={theadTrClassName}>
            {cols.map((col, i) => (
              <th
                key={i}
                scope="col"
                className="whitespace-nowrap px-6 py-3 last:text-center"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className={cn("divide-y", tbodyClassName)}>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={tbodyTrClassName}
              onClick={
                handleTableRowClick
                  ? () => handleTableRowClick(row, rowIndex)
                  : null
              }
            >
              {cols.map((col, i) => (
                <td key={i} className="whitespace-nowrap px-6 py-3 ">
                  {col.renderer
                    ? col.renderer(row, rowIndex)
                    : row[col.dataField]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
