<template>
	<div id="home">
		<el-container>
			<el-header style="height: 140px;">
				<el-row>
					<el-col :span="12">
						<div class="grid-content bg-purple" style="height: 100px;">
							<img src="../assets/uugai.com_1547534130625.png" style="width:400px;height:100px;float: left;margin-top: 15px;" />
						</div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content bg-purple-light" style="height: 100px;line-height: 80px;">
							<el-row>
								<el-col :span="6">
									<div class="grid-content bg-purple" style="background-color: #409EFF;"><a href="">首页</a></div>
								</el-col>
								<el-col :span="6">
									<div class="grid-content bg-purple-light" style="background-color: #409EFF;"><a href="">政策</a></div>
								</el-col>
								<el-col :span="6">
									<div class="grid-content bg-purple" style="background-color: #409EFF;"><a href="">诉求</a></div>
								</el-col>
								<el-col :span="6">
									<div class="grid-content bg-purple-light" style="background-color: #409EFF;"><a href="">其他</a></div>
								</el-col>
							</el-row>
							<!-- <div id="home-right">
								<a href="">首页</a>
								<a href="">政策</a>
								<a href="">诉求</a>
								<a href="">其他</a>
							</div> -->
						</div>
					</el-col>
				</el-row>

			</el-header>
			<el-main>Main</el-main>
			<el-footer>Footer</el-footer>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: "home",
		data() {
			return {

			};
		}
	}
</script>

<style>
	/* .el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}

	.el-row {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	} */
</style>
