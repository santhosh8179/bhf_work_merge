import { Button, Modal } from "antd";
import { Form, DatePicker, Select, Input } from "antd";
import { useEffect, useState } from "react";

const dateFormat = "DD/MM/YYYY";

const initialState = {
  id: Date.now() + Math.random(),
  taskNumber: 0,
  taskName: "",
  category: "",
  effortsSpent: "",
  priority: "",
  creationDate: "",
  closingDate: "",
  updatedTimeStamp: new Date().toISOString(),
};

const CustomModal = ({ formData, onSubmitForm, name, title }) => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [taskDetails, setTaskDetails] = useState(initialState);

  useEffect(() => {
    if (formData) {
      setTaskDetails(formData);
    }
  }, [formData]);

  const onFinish = (values) => {
    setOpen(false);
    onSubmitForm(taskDetails, taskDetails?.type);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const onChangeInput = (e, name) => {
    setTaskDetails({ ...taskDetails, [name]: e?.target?.value || e });
  };

  return (
    <>
      <Button
        style={{ marginBottom: "4px" }}
        type="primary"
        onClick={showModal}
      >
        {name}
      </Button>

      <Modal
        title={title}
        open={open}
        onOk={form.submit}
        onCancel={handleCancel}
        okText={taskDetails?.type === "update" ? "Update" : "Add"}
      >
        <Form
          form={form}
          name="basic"
          initialValues={taskDetails}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Item
              label="Task Name"
              name="taskName"
              rules={[
                {
                  required: true,
                  message: "Please input task name!",
                },
              ]}
            >
              <Select
                value={taskDetails.taskName}
                style={{ width: "220px" }}
                onChange={(e) => onChangeInput(e, "taskName")}
              >
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Category"
              name="category"
              rules={[
                {
                  required: true,
                  message: "Please input category",
                },
              ]}
            >
              <Select
                value={taskDetails.category}
                style={{ width: "220px" }}
                onChange={(e) => onChangeInput(e, "category")}
              >
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Item
              label="Efforts Spent"
              name="effortsSpent"
              rules={[
                {
                  required: true,
                  message: "Please input efforts spent",
                },
              ]}
            >
              <Input
                value={taskDetails.effortsSpent}
                style={{ width: "220px" }}
                onChange={(e) => onChangeInput(e, "effortsSpent")}
              />
            </Form.Item>
            <Form.Item
              label="Priority"
              name="priority"
              rules={[
                {
                  required: true,
                  message: "Please input priority",
                },
              ]}
            >
              <Select
                value={taskDetails.priority}
                style={{ width: "220px" }}
                onChange={(e) => onChangeInput(e, "priority")}
              >
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Item
              label="Creation Date"
              name="creationDate"
              rules={[
                {
                  required: true,
                  message: "Please input creation date!",
                },
              ]}
            >
              <DatePicker
                value={taskDetails?.creationDate}
                format={dateFormat}
                style={{ width: "220px" }}
                onChange={(e) => onChangeInput(e, "creationDate")}
              />
            </Form.Item>
            <Form.Item
              label="Closing date"
              name="closingDate"
              rules={[
                {
                  required: true,
                  message: "Please input closing date",
                },
              ]}
            >
              <DatePicker
                value={taskDetails?.closingDate}
                format={dateFormat}
                style={{ width: "220px" }}
                onChange={(e) => onChangeInput(e, "closingDate")}
              />
            </Form.Item>
          </div>

          <Form.Item
            label="Task Number"
            name="taskNumber"
            rules={[
              {
                required: true,
                message: "Please input task number",
              },
            ]}
          >
            <Input
              value={taskDetails.taskNumber}
              style={{ width: "220px" }}
              onChange={(e) => onChangeInput(e, "taskNumber")}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default CustomModal;
