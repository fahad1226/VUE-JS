<template>
	<div class="container">
		<table class="table table-dark">
			<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Name</th>
					<th scope="col">Email</th>
					<th scope="col">University</th>
				</tr>
			</thead>
			<tbody v-for="(people, index) in people":key="index">
				<tr>
					<th scope="row"> {{ index + 1}} </th>
					<td> {{ people.name }} </td>
					<td> {{ people.email }} </td>
					<td> {{ people.university }} </td>
				</tr>
				<button class="btn btn-secondary" @click="addPeople(people)">Add People</button>
				<button class="btn btn-danger" @click="removePeople(index)">Remove People</button>
			</tbody>
		</table>
		
	</div>
</template>

<script>
export default {
	props: ['people'],

	methods: {
		addPeople(people) {
			this.$emit('NewPeopleAdded',people)
		},
		removePeople(index) {

			this.$emit('removedPeople',index)
		}
	}

}	
</script>


<style>


</style>