function TableWrapper({ columns, rows, renderRow }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-slate-100">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className="whitespace-nowrap px-4 py-3 text-sm font-bold text-slate-600"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{rows.map((row, index) => renderRow(row, index))}</tbody>
        </table>
      </div>
    </div>
  );
}

export default TableWrapper;
