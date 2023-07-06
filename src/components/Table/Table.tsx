import React from 'react'
import { TableProps } from './Table.types'
import styled from 'styled-components'

const StyledTable = styled.table<TableProps>`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background: ${(props) => (props.disabled ? 'red' : 'undefined')};

  tbody tr {
    :nth-of-type(odd) {
      background-color: ${(props) => (props.disabled ? 'undefined' : props.bgColor)};
    }
    :hover {
      background-color: ${(props) => (!props.disabled ? 'lightpink' : 'undefined')};
    }
  }

  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }

  td {
    border: 1px solid black; /* Add this line to set the border */
    padding: 8px; /* Optional: Add padding to improve spacing */
  }

  tfoot {
    text-align: center;
  }
`

const Table: React.FC<TableProps> = ({
  header,
  colHeaders,
  tableValues,
  footer,
  bgColor,
  disabled,
}) => {
  const renderTableColumnHeaders = () => {
    const head = []

    for (let i = 0; i < colHeaders.length; i++) {
      head.push(<th key={i}>{colHeaders[i]}</th>)
    }
    return head
  }

  const renderTableRows = () => {
    const rows = []
    // const gfg = [
    //   [0, 1, 2],
    //   [3, 4, 5],
    //   [6, 7, 8],
    // ];
    for (let i = 0; i < tableValues.length; i++) {
      const columns = []
      console.log('#ofrows:' + tableValues.length)
      console.log('#Cols:' + tableValues[0].length)
      for (let j = 0; j < tableValues[0].length; j++) {
        columns.push(<td key={tableValues[i][j]}>{tableValues[i][j]}</td>)
        // console.log(gfg[i][j] + "," + i + "," + j);
      }
      rows.push(
        <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
          {columns}
        </tr>,
      )
    }
    return rows
  }

  return (
    <StyledTable
      header={header}
      colHeaders={colHeaders}
      tableValues={tableValues}
      bgColor={bgColor}
      disabled={disabled}
    >
      <table>
        <caption>{header}</caption>
        <thead>
          <tr>{renderTableColumnHeaders()}</tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
        <tfoot>
          <tr>{footer}</tr>
        </tfoot>
      </table>
    </StyledTable>
  )
}

export default Table
