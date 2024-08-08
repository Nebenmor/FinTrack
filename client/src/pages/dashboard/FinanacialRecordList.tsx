import { FinancialRecord, useFinancialRecords } from "../../contexts/financal-record-context";
import { useTable, Column, CellProps, Row } from 'react-table';

interface EditableCellProps extends CellProps<FinancialRecord> {
  updateRecord: (rowIndex: number, columnId: string, value: any) => void;
  editable: boolean;
}

const EditableCell: React.FC<EditableCellProps> = ({value: initalValue, row, column, updateRecord, editable}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(initialValue)
  
  return (
  <div>
     {isEditing ? 
     <input value={value} onChange={(e) => setValue(e.target.value)} autoFocus style={{width: "100%"}} /> : typeof value === "string" ? (value) : (value.toString())} </div>)
}

export const FinancialRecordList = () => {
  const { records } = useFinancialRecords();

  const columns : Array<Column<FinancialRecord>> = useMemo(() => [
    {
      Header: "Description",
      accessor: "description",

    }
  ])

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data: records});
  return (
    <div className="table-container">
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((hg) =>(
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((column) => (
                <th {...column.getHeaderProps()}> {column.render("Header")} </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps}>  
          {rows.map((row, idx) => {
            prepareRow(row);
            return <tr {...row.getRowProps()}>{row.cells.map((cell) => (
              <td {...cell.getCellProps()} > {cell.render("cell")} </td>
            ))} </tr>
          })}
        </tbody>
      </table>
    </div>
  );
};
