import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Typography, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import axios from 'axios';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch products from Product Service (PHP)
    axios.get('http://product-service/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const checkout = async () => {
    try {
      // Send order to Order Service (.NET)
      const response = await axios.post('http://order-service/api/orders', {
        items: cart,
        total: cart.reduce((sum, item) => sum + item.price, 0)
      });
      alert(`Order placed! Order ID: ${response.data.orderId}`);
      setCart([]);
    } catch (error) {
      console.error('Checkout failed:', error);
    }
  };

  return (
    <div>
      <Head>
        <title>E-Shop Frontend</title>
        <meta name="description" content="E-Commerce Platform" />
      </Head>

      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to E-Shop
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          Your Cart: {cart.length} items
        </Typography>
        {cart.length > 0 && (
          <Button variant="contained" color="primary" onClick={checkout}>
            Checkout
          </Button>
        )}

        <Grid container spacing={4} style={{ marginTop: 20 }}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography color="textSecondary">
                    ${product.price}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    color="primary"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}