<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<router-link :to="{ path: '/' }" class="navbar-brand">Home</router-link>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
				<router-link :to="{path:'/practice'}" class="nav-link">
					Practice
				</router-link>
				</li>
				<li class="nav-item">
					<router-link :to="{ path:'/myinfo' }" class="nav-link">Myself</router-link>
				</li>

			</ul>
			<form @submit.prevent="search(keyword)" class="form-inline my-2 my-lg-0">
				<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="keyword" >
				<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>
		</div>
	</nav>

</template>

<script>
export default {

	data() {
		return {
			keyword: ''
		}
	},

	methods: {
		search() {
			this.$emit('search',this.keyword)
		}
	}

	
}
</script>

<style>

</style>
