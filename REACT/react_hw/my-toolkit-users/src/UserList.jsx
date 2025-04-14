import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Form, Input, InputNumber, Row, Col } from "antd";
import 'antd/dist/reset.css';

function UserList() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    dispatch({
      type: 'users/addUser',
      payload: { ...values, id: Date.now() },
    });
    form.resetFields();
  };

  return (
    <div style={{ padding: "30px", background: "#f0f2f5", minHeight: "100vh" }}>
      <Row gutter={[16, 16]} justify="center">
        {users.map((user) => (
          <Col key={user.id}>
            <Card
              title={user.name}
              bordered={false}
              hoverable
              style={{ width: 240, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
            >
              <p><strong>Возраст:</strong> {user.age}</p>
              <p><strong>Город:</strong> {user.city}</p>
              <Button danger onClick={() => dispatch({ type: 'users/removeUser', payload: user.id })}>
                Удалить
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <Form
        layout="inline"
        style={{ marginTop: "30px", justifyContent: "center" }}
        onFinish={(values) => {
          dispatch({
            type: 'users/addUser',
            payload: { ...values, id: Date.now() },
          });
        }}
      >
        <Form.Item name="name" rules={[{ required: true, message: 'Введите имя' }]}>
          <Input placeholder="Имя" />
        </Form.Item>
        <Form.Item name="age" rules={[{ required: true, message: 'Введите возраст' }]}>
          <InputNumber placeholder="Возраст" min={1} />
        </Form.Item>
        <Form.Item name="city" rules={[{ required: true, message: 'Введите город' }]}>
          <Input placeholder="Город" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Добавить пользователя
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UserList;
