<template>
	<div class="container">
	<div class="row">
        <div class="span12">
    		<table class="table table-condensed table-hover">
    			<thead>
    				<tr>
    					<th>ID </th>
    					<th>First Name</th>
    					<th>Last Name</th>
    					<th>Email</th>
    					<th>Gender</th>
    					<th>Price</th>
    				</tr>
    			</thead>
    			<tbody>
    				<tr v-for="(item,index) in items":key="index">
    					<td> {{ item.id }} </td>
    					<td> {{ item.first_name }} </td>
    					<td>{{item.last_name}}</td>
    					<td> {{ item.email }} </td>
    					<td> {{ item.gender }} </td>
    					<td> {{ item.price }} </td>
    				</tr>
    			
    				<tr>
    					<td> </td>
    					<td><a class="btn btn-success" @click="addToItems(item.first_name)"><i class="icon-shopping-cart icon-white"></i> Add Name »</a></td>
    				</tr>
    			</tbody>
    		</table>
    	</div>
	</div>
</div>
</template>

<script>
	export default {
		props: ['items'],
        methods: {
            addToItems(name) {
                this.$emit("newItemAdded",name)
            }
        }

	}
</script>


<style>

</style>





























