import { Table } from "antd";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const CustomTable = (props) => {
  return (
    <Table
      columns={props.columns}
      dataSource={props.data}
      onChange={onChange}
    />
  );
};

export default CustomTable;
