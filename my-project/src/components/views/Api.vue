<template>
	
	<div class="container">
		<h1>json placeholder api task</h1>
		<div v-for="post in items">
			<p> {{ post.title }} </p>
			<p> {{ post.id }} </p>

		</div>
		
	</div>
</template>



<script>
// const axios = require('axios');
	export default {

		data() {

			return {

				items: null //it also can be like this  --> items: '' , items: []
			}
		},

		mounted: function() {

			axios.get('https://jsonplaceholder.typicode.com/posts',{
				title: 'test'
			})
					.then(response => {
						console.log(response)
						this.items = response.data
					}).catch(error => {
						this.items = [{title:"no posts found"}]
					}).finally(console.log('data loaded complete'));
		}
	}
</script>


<style>
	

</style>