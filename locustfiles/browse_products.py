from locust import HttpUser, task, between
from random import randint


class WebsiteUser(HttpUser):
    wait_time = between(1, 5)

    @task(2)
    def view_products(self):
        print("View Products")
        self.client.get('/api/products/', name='/api/products')

    @task(4)
    def view_product(self):
        print("View Products Details")
        product_id = randint(1, 999)
        self.client.get(
            f'/api/products/{product_id}',
            name='/api/products/:id')

    @task(1)
    def add_to_cart(self):
        print("Add to Cart")
        product_id = randint(1, 10)
        self.client.post(
            f'/api/carts/{self.cart_id}/items/',
            name='/api/carts/items',
            json={'product_id': product_id, 'quantity': 1}
        )

    def on_start(self):
        response = self.client.post('/api/carts/')
        result = response.json()
        print("New Cart created: {}".format(result['id']))
        self.cart_id = result['id']

