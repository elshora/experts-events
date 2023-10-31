"use client";
import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef } from "ag-grid-community";
import Image from "next/image";
import Link from "next/link";
interface FilterComponentProps {
  experts: EXPERT[];
}
const DataTable: React.FC<FilterComponentProps> = ({ experts }) => {
  const srcLoader = (src: any) => src || `/images/default-avatar.png`;
  const columnDefs: ColDef<any>[] = useMemo(
    () => [
      {
        headerName: `Name`,
        field: "name",
        minWidth: 170,
        sortable: true,
        cellRenderer: (params: any) => (
          <>
            <Link
              href={`/experts/${params.data._id}`}
              style={{ color: "blue", fontWeight: "light" }}
            >
              <Image
                src={srcLoader(params.data?.imgLink)}
                height={50}
                width={50}
                alt="logo"
              />{" "}
              <span>{`${params.data?.firstName} ${params.data?.lastName}`}</span>
            </Link>
          </>
        ),
      },
      {
        headerName: `Job Title`,
        field: "title",
        minWidth: 200,
        sortable: true,
        valueGetter: (params) => `${params.data?.title || "N/A"}`,
      },
      {
        headerName: `Bio`,
        field: "bio",
        minWidth: 200,
        sortable: true,
        valueGetter: (params) => `${params.data?.bio || "N/A"}`,
      },
      {
        headerName: `organization`,
        field: "organization",
        minWidth: 150,
        sortable: true,
        valueGetter: (params) => `${params.data?.organization || "N/A"}`,
      },
    ],
    []
  );
  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      flex: 1,
      resizable: true,
      filter: true,
    };
  }, []);

  return (
    <div>
      <h2 className="text-center display-5 my-3">Experts page</h2>
      <div className="container">
        <div className="row">
          <div
            className="ag-theme-alpine"
            style={{ width: "100vw", height: "615px" }}
          >
            <AgGridReact
              rowData={experts}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              rowSelection="multiple"
              animateRows={true}
              gridOptions={{
                pagination: true,
                paginationPageSize: 10,
                rowHeight: 50,
                enableCellTextSelection: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
