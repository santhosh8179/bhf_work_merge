import React, { useState } from 'react'
import CustomTable from '../Componenets/Table'
import CustomModal from '../Componenets/Modal'
import User from '../Componenets/User'
import { Col, Row } from 'antd'
import dayjs from 'dayjs'
import { message, Popconfirm } from 'antd'
import EffortsChart from '../Componenets/Graph'

const dateFormat = 'DD/MM/YYYY'

const TaskDetails = (props) => {
  const columns = [
    {
      title: 'Task Number',
      dataIndex: 'taskNumber',
      sorter: (a, b) => a.taskNumber - b.taskNumber,
      defaultSortOrder: 'ascend',
    },
    {
      title: 'Task Name',
      dataIndex: 'taskName',
      sorter: (a, b) => a.taskName.length - b.taskName.length,
      defaultSortOrder: 'ascend',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: 'Efforts Spent',
      dataIndex: 'effortsSpent',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.effortsSpent - b.effortsSpent,
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      sorter: (a, b) => a.priority.length - b.priority.length,
      defaultSortOrder: 'ascend',
    },
    {
      title: 'Creation Date',
      dataIndex: 'creationDate',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.creationDate - b.creationDate,
    },

    {
      title: 'Closing Date',
      dataIndex: 'closingDate',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.closingDate - b.closingDate,
    },
    {
      title: 'Updated TimeStamp',
      dataIndex: 'updatedTimeStamp',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.updatedTimeStamp - b.updatedTimeStamp,
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (_, record) => (
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => confirm(record)}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <a href="_">Delete</a>
        </Popconfirm>
      ),
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const { closingDate, creationDate, ...rest } = record
        return (
          <CustomModal
            formData={{
              closingDate: dayjs(record.closingDate, dateFormat),
              creationDate: dayjs(record.creationDate, dateFormat),
              ...rest,
              type: 'update',
            }}
            title="Edit"
            name="Edit"
            onSubmitForm={onSubmitForm}
          />
        )
      },
    },
  ]

  const user = {
    name: 'John doe',
    phone: 1810000000,
    address: 'No. 18, Wantang Road, Xihu District, Hangzhou,Zhejiang, China',
    remarks: 'empty',
  }

  const confirm = (e) => {
    let filteredData = dataSource.filter((item) => item.id !== e.id)
    setDataSource([...filteredData])
    message.success(`deleted Task ${e?.taskNumber} successfully`)
  }

  const cancel = (e) => {
    console.log(e)
  }

  const [dataSource, setDataSource] = useState([
    {
      id: '1',
      key: 'count',
      taskNumber: '1',
      taskName: 'abc',
      category: 'p1',
      effortsSpent: 9,
      priority: 'p1',
      creationDate: '11-02-2023',
      closingDate: '12-02-2023',
      updatedTimeStamp: '13-02-2023',
    },
    {
      id: 2,
      key: 'count1',
      taskNumber: '2',
      taskName: 'cde',
      category: 'p2',
      effortsSpent: 2,
      priority: 'p1',
      creationDate: '12-02-2023',
      closingDate: '13-02-2023',
      updatedTimeStamp: '14-02-2023',
    },
  ])

  const onSubmitForm = (data, type) => {
    const { creationDate, closingDate, updatedTimeStamp, ...rest } = data
    const cd = dayjs(creationDate).format(dateFormat)
    const cld = dayjs(closingDate).format(dateFormat)
    const updt = dayjs(updatedTimeStamp).format(`dddd, MMMM D, YYYY h:mm A`)

    const finalObject = {
      creationDate: cd,
      closingDate: cld,
      updatedTimeStamp: updt,
      ...rest,
    }

    if (type === 'update') {
      let filteredData = dataSource.map((item) => {
        if (item.id === finalObject.id) {
          item = finalObject
        }
        return item
      })

      setDataSource([...filteredData])
      return
    }
    setDataSource([...dataSource, finalObject])
  }
  return (
    <Row>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
        <User user={user} />
        <div>
          <h3>Summary</h3>
          <div style={{ width: 'auto', height:"300px" }}>
            <EffortsChart />
          </div>
        </div>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 18 }}>
        <div style={{ width: '100%', overflowY: 'hidden' }}>
          <CustomModal
            title="Add Row"
            name="Add Row"
            onSubmitForm={onSubmitForm}
          />
          <CustomTable data={dataSource} columns={columns} />
        </div>
      </Col>
    </Row>
  )
}
export default TaskDetails
