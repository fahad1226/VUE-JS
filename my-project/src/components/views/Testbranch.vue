<template>
	<div>
		<h1>this is from  {{ branch }} </h1>
		<button @click="addButton">Click Here</button>
	</div>
</template>


<script>
	export default {

		data() {

			return {

				branch: 'Branch B'
			}
		},
		methods: {

			addButton() {

				alert('branch B clicked')
				console.log('clicked the button')
			}
		}
	}

</script>