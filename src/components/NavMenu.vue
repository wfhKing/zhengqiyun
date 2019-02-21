<template>
	<div id="navmenu">
		<!-- <router-link :to="{name:'notice'}">首页</router-link>
		<router-link :to="{name:'policy'}">政策</router-link>
		<router-link :to="{name:'declare'}">申报政策</router-link>
		<router-link :to="{name:'atlas'}">政策统计图</router-link> -->
		
		
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-menu-item index="1">
				<router-link :to="{name:'notice'}">首页</router-link>
			</el-menu-item>
			<el-menu-item index="2">
				<router-link :to="{name:'policy'}">政策</router-link>
			</el-menu-item>
			<el-menu-item index="3">
				<router-link :to="{name:'declare'}">申报政策</router-link>
			</el-menu-item>
			<el-menu-item index="4">
				<router-link :to="{name:'atlas'}">政策统计图</router-link>
			</el-menu-item>
		</el-menu>
	</div>
	
</template>

<script>
</script>

<style>
</style>
