import Icon, { ShopOutlined, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons';
import { Col, List, Row, Skeleton, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

// Large CSS file with some unused styles
import './ProductList.scss';

export default function ProductListPage() {
    const [isProductLoading, setIsProductLoading] = useState(true);
    const [products, setProducts] = useState(
        Array(10)
            .fill(1)
            .map(() => ({ title: '' })),
    );

    useEffect(() => {
        setIsProductLoading(true);

        // A slow network request with a large response
        // 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'
        fetch('https://dummyjson.com/products/?limit=0&sortBy=title&order=asc&delay=3000') // Fetch a large list of products
            .then((res) => res.json())
            .then((data) => {
                setIsProductLoading(false);
                setProducts(data?.products);
            })
            .catch(() => setIsProductLoading(false));

        // No cleanup function
    }, []);

    return (
        <section>
            <Row justify="center" align="middle" gutter={[16, 24]}>
                <Col span={20} style={{ textAlign: 'center' }}>
                    <Typography.Title level={2}>Product List</Typography.Title>
                </Col>

                <Col span={20} style={{ textAlign: 'center' }}>
                    <List
                        style={{ textAlign: 'left' }}
                        itemLayout="vertical"
                        size="large"
                        pagination={false}
                        dataSource={products}
                        renderItem={(product) => (
                            <List.Item
                                key={product.title}
                                actions={
                                    !isProductLoading
                                        ? [
                                              <Space
                                                  direction="horizontal"
                                                  size="middle"
                                                  key="production-rating"
                                              >
                                                  <Icon component={StarOutlined} />
                                                  <Typography.Text>
                                                      {product.rating}
                                                  </Typography.Text>
                                              </Space>,
                                              <Space
                                                  direction="horizontal"
                                                  size="middle"
                                                  key="production-stock"
                                              >
                                                  <Icon
                                                      component={ShopOutlined}
                                                      key="list-vertical-like-o"
                                                  />
                                                  <Typography.Text>{`${product.stock} (${product.availabilityStatus})`}</Typography.Text>
                                              </Space>,
                                              <Space
                                                  direction="horizontal"
                                                  size="middle"
                                                  key="production-price"
                                              >
                                                  <Icon
                                                      component={ShoppingCartOutlined}
                                                      key="list-vertical-like-o"
                                                  />
                                                  <Typography.Text>{`${product.price} $`}</Typography.Text>
                                              </Space>,
                                          ]
                                        : null
                                }
                                extra={
                                    !isProductLoading && (
                                        <img width={272} alt="logo" src={product.thumbnail} />
                                    )
                                }
                            >
                                <Skeleton loading={isProductLoading} active avatar>
                                    <List.Item.Meta
                                        title={
                                            <a href={`/product-details/${product.id}`}>
                                                {product.title}
                                            </a>
                                        }
                                        description={product.description}
                                    />
                                </Skeleton>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </section>
    );
}
