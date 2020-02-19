<template>
	<div class="row">
		<div v-for="myinfo in myinfo" class="col-sm-6">
			<div  class="pt-3">
				<img class="rounded-circle d-inline" width="100"src="https://cn.i.cdn.ti-platform.com/cnapac/content/2016/showpage/ben-10/in/showicon.png">
				<h2 class="d-inline display text-secondary"> {{ myinfo.name }} </h2>
				<button @click="addName(myinfo)">Add Name</button>

			</div>
			<div  class="pt-2">
				<strong class="text-capitalize">{{ myinfo.passion }}</strong>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		</div>
		<div v-for="myinfo in myinfo" class="col-md-6">
			<h1 class="text-center">{{ myinfo.about }}</h1>

			<div class="row">
				<div class="col-md-3">
					<h5>{{ myinfo.language_1 }}</h5>
					<hr>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						</p>
				</div>

				<div class="col-md-3">
					<h5>{{ myinfo.language_2 }}</h5>
					<hr>

					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						</p>
				</div>

				<div class="col-md-3 ">
					<h5>{{ myinfo.language_3 }}</h5>
					<hr>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					</p>
				</div>
			</div>
			
		</div>

	</div>	
</template>

<script>
export default {
	props: ['myinfo'],
	methods: {

		addName(name) {

			this.$emit('NewNameadded',name)
		}
	}
}
</script>



<style>
	.vl {
	  border-left: 3px solid black;
	  height: 400px;
	}
</style>
