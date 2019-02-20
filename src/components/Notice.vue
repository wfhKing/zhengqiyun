<template>
	<div id="notice">
		<el-row>
			<el-col :span="13" :offset="2">
				<div class="grid-content bg-purple">
					<el-carousel :interval="5000" arrow="always">
						<el-carousel-item v-for="item in 4" :key="item">
							<h3>{{ item }}</h3>
						</el-carousel-item>
					</el-carousel>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple-light">
					<el-row>
						<span style="float: left;margin-left: 20px;font-size: 15px;"><b>公告</b></span>
						<a href="" style="float:right;font-size: 14px;">更多
							<i class="el-icon-d-arrow-right"></i></a>
					</el-row>
					<div>
						<ul style="list-style-type:none;text-align: left;margin:-20px -10px">
							<li style="margin-bottom: -30px;">
								<h4 style="margin-bottom: -30px;"><a href="">标题</a></h4>
								<p style="font-size: 14px;width:50px;">1111111111111111111111111111111</p>
							</li>
							<li style="margin-bottom: -30px;">
								<h4 style="margin-bottom: -30px;"><a href="">标题</a></h4>
								<p style="font-size: 14px;">内容</p>
							</li>
							<li style="margin-bottom: -30px;">
								<h4 style="margin-bottom: -30px;"><a href="">标题</a></h4>
								<p style="font-size: 14px;">内容</p>
							</li>
							<li style="margin-bottom: -30px;">
								<h4 style="margin-bottom: -30px;"><a href="">标题</a></h4>
								<p style="font-size: 14px;">内容</p>
							</li>
						</ul>
					</div>
				</div>
			</el-col>
			<el-col :span="3">
				<div class="grid-content bg-purple-light" style="background-color: white;"></div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>

</style>
