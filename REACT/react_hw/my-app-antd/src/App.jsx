import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';

const { Title } = Typography;

function App() {
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setSubmittedData(formData);
  };

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '600px',
        margin: '40px auto',
        backgroundColor: '#fafafa',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      }}
    >
      <Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>
        Форма с использованием Ant Design
      </Title>

      <Form layout="vertical" style={{ marginBottom: '0' }}>
        <Form.Item
          label="Имя"
          style={{ marginBottom: '16px' }}
        >
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Введите ваше имя"
            style={{ borderRadius: '4px' }}
          />
        </Form.Item>

        <Form.Item
          label="Описание"
          style={{ marginBottom: '16px' }}
        >
          <Input
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Введите описание"
            style={{ borderRadius: '4px' }}
          />
        </Form.Item>

        <Form.Item style={{ textAlign: 'center', marginBottom: '0' }}>
          <Button
            type="primary"
            onClick={handleSubmit}
            style={{
              width: '100%',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            Отправить
          </Button>
        </Form.Item>
      </Form>

      {submittedData && (
        <Card
          style={{
            marginTop: '20px',
            borderRadius: '8px',
            backgroundColor: '#fff',
          }}
        >
          <Title level={4} style={{ marginBottom: '12px' }}>
            Отправленные данные:
          </Title>
          <p style={{ margin: '0 0 8px' }}>
            <strong>Имя:</strong> {submittedData.name}
          </p>
          <p style={{ margin: 0 }}>
            <strong>Описание:</strong> {submittedData.description}
          </p>
        </Card>
      )}
    </div>
  );
}

export default App;
