<template>
	<div class="container">
		<div class="row pt-4">
			<div class="col-md-6">
				<img class="border-4 border-dark" height="350" width="400" v-bind:src="image">
			</div>
			<div class="col-md-6">
				<h2>{{ product }}</h2>
				<p v-show="stock">stock</p>
				<p v-if="indevtory >= 10">In Stock</p>
				<p v-else-if="indevtory <10 && indevtory > 0">almost sold out</p>
				<p v-else="indevtory === 0">Out of stock</p>
				<span class="text-danger" v-if="onSale">On Sale</span>
				<div v-for="(item, index) in itemLists" :key="index">
				<span>{{ item.name }}</span>  <img  @mouseover="showImage(item.smallImage)" class="mt-3" height="100" width="100" v-bind:src="item.smallImage">
 				</div>


 				<div class="pt-5">
 					<button @click="addToCart" class="btn btn-primary d-inline mr-5">+add to cart</button>
 					<button @click="removezFromCart" class="btn btn-primary d-inline mr-5">-remove from cart</button>
 					<h4 v-if="cart>=0" class="d-inline">Cart({{cart}})</h4>
 					<h4 v-else>noting in your cart</h4>
 				</div>

			
			</div>
			
		</div>
	</div>
</template>


<script>
	export default {

		data() {

			return {

				product: 'socks',
				image: '../static/assets/test.jpg',
				indevtory: 0,
				stock: false,
				onSale: true,
				itemLists : [

					{
						id : 1,
						name: '80% cotton',
						smallImage: '../static/assets/test.jpg',
					},
					{
						id: 2,
						name: '20% polyster',
						smallImage: '../static/assets/test2.jpg',
					},
					{
						id: 3,
						name: 'Gender-Netutral',
						smallImage: '../static/assets/test3.jpg',
					}
				],

				cart: 0		
				
			}
		},

		methods: {

			addToCart() {

				this.cart += 1
			},

			showImage(smallImage) {
				this.image = smallImage
			},
			removezFromCart() {

				this.cart -= 1
				if (this.cart < 0) {
					this.cart = 0
					alert('nothing in your cart')
					console.log(this.cart)	
				}
			},
			
		}
	}
</script>

<style>
	
</style>