import * as React from "react";
import { Grid, GridColumn, GridProps } from "@progress/kendo-react-grid";
import products from "./products.json";

import '@progress/kendo-theme-default/dist/all.css';

/**
 * 
 * It is built on React from the ground up, with zero dependencies, by a company with 19+ years of experience in making enterprise-ready Grids. This results in a React data grid that delivers lightning-fast performance and is highly customizable.
 * The KendoReact library is distributed through npm packages, and the Data Grid is available as @progress/kendo-react-grid.
 * @returns 
 */
export const KendoGrid: React.FC<GridProps> = (props: GridProps) => {
  return (
    <Grid
      style={{
        height: "400px",
      }}
      data={products}
      {...props}
    >
      <GridColumn field="ProductID" title="ID" width="40px" />
      <GridColumn field="ProductName" title="Name" width="250px" />
      <GridColumn field="Category.CategoryName" title="CategoryName" />
      <GridColumn field="UnitPrice" title="Price" />
      <GridColumn field="UnitsInStock" title="In stock" />
    </Grid>
  );
}