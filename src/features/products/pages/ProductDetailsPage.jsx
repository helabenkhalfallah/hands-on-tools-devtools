import { Carousel, Col, Descriptions, Empty, Flex, Image, Row, Spin, Tag, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Large CSS file with some unused styles
import './ProductDetailsPage.scss';

export default function ProductDetailsPage() {
    const [productData, setProductData] = useState(null);
    const [isProductLoading, setIsProductLoading] = useState(true);

    const { id: productId } = useParams();

    useEffect(() => {
        setIsProductLoading(true);
        // Fetching product details (large response, potential delay)
        fetch(`https://dummyjson.com/products/${productId}?delay=3000`)
            .then((res) => res.json())
            .then((data) => {
                setProductData(data);
                setIsProductLoading(false);
            })
            .catch(() => setIsProductLoading(false));
    }, [productId]);

    if (isProductLoading) {
        return (
            <Row justify="center" align="middle" gutter={[16, 16]}>
                <Col span={24} style={{ textAlign: 'center' }} />
                <Col span={12} style={{ textAlign: 'center' }}>
                    <Spin size="large" />
                </Col>
            </Row>
        );
    }

    if (!Object.keys(productData || {})?.length) {
        return <Empty />;
    }

    const excludedKeys = ['tags', 'dimensions', 'reviews', 'meta', 'images', 'thumbnail'];
    const keywordsColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];

    // Carousel: LazyLoadTypes = "ondemand" | "progressive" | "anticipated"
    return (
        <section>
            <Row justify="center" align="middle" gutter={[16, 24]}>
                <Col span={20} style={{ textAlign: 'center' }}>
                    <Typography.Title level={2}>Product Details</Typography.Title>
                </Col>

                {productData.images?.length > 0 && (
                    <Col span={20} style={{ textAlign: 'center' }}>
                        <Carousel autoplay arrows infinite style={{ background: '#364d79' }}>
                            {productData.images.map((image) => (
                                <Image key={image} width={200} src={image} />
                            ))}
                        </Carousel>
                    </Col>
                )}

                <Col span={20} style={{ textAlign: 'center' }}>
                    <Descriptions
                        bordered
                        size="middle"
                        column={1}
                        title=""
                        style={{ textAlign: 'left' }}
                    >
                        {productData.tags?.length && (
                            <Descriptions.Item label="Keywords">
                                <Flex gap="4px 0" wrap>
                                    {[...new Set(productData.tags)].map((tag) => (
                                        <Tag
                                            key={tag}
                                            bordered={false}
                                            color={keywordsColors[Math.floor(Math.random() * 4)]}
                                        >
                                            {tag}
                                        </Tag>
                                    ))}
                                </Flex>
                            </Descriptions.Item>
                        )}

                        {Object.keys(productData || {})
                            ?.filter((key) => !excludedKeys.includes(key))
                            ?.map((key) => (
                                <Descriptions.Item key={key} label={key}>
                                    {productData[key]}
                                </Descriptions.Item>
                            ))}
                    </Descriptions>
                </Col>
            </Row>
        </section>
    );
}
