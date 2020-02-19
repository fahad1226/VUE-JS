<template>
	<div class="container">
		<h2>Todo List</h2>

		<ul >
			<li v-for="item in items"> {{ item }} </li>
		</ul>
		<input type="text" v-model="item">
		<p v-bind="item"> {{ item }} </p>
		<button @click="items.push(item)">Add Item</button>

		<div>
			<h1>tax counter</h1>
			<input type="text" v-model="price">
			<input type="text" placeholder="increase the tax" v-model="tax_per">
			<h4>price - {{ price }}</h4>
			<h4 class="d-inline">tax - {{ tax }}</h4> <small v-if="tax_per>0.1" class="d-inline">for {{ parseInt(tax_per*price) }}% tax</small>
			<small class="d-inline" v-if="tax_per===0.1">for 10% tax</small>
			<h4>total - {{ total }}</h4>
		</div>
	</div>
</template>

<script>
	export default {
		data() {

			return {
				item: '',
				items: ['item1','item2'],
				price: 100,
				tax_per: 0.1

			}
		},

		computed: {

			tax: function() {
				return this.price * this.tax_per
			},
			total() {
				return parseInt(this.price) + parseInt(this.price * this.tax_per)
			}
		}
		
	}
</script>

<style>
	
</style>