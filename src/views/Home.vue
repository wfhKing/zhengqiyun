<template>
	<div class="home">
		<el-container>
			<el-header style="margin-bottom:10px;">
				<el-row>
					<el-col :span="6" :offset="2">
						<div class="grid-content bg-purple-light" style="background-color: white;">
							<img src="../assets/uugai.com_1547534130625.png" width="300px" height="70px" style="float: left;" />
						</div>
					</el-col>
					<el-col :span="6" :offset="2">
						<div class="grid-content bg-purple-light" style="background-color: white;">
							<el-input placeholder="请输入内容" v-model="input" class="searchClass" style="width: 300px;">
								<template slot="append">
									<el-button slot="append" icon="el-icon-search"></el-button>
								</template>
							</el-input>
						</div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple-light" style="background-color: white;">
							<el-breadcrumb separator="" style="margin:27px 50px;font-size:15px">
								<el-breadcrumb-item><a href="">首页</a></el-breadcrumb-item>
								<el-breadcrumb-item><a href="">政策</a></el-breadcrumb-item>
								<el-breadcrumb-item><a href="">诉求</a></el-breadcrumb-item>
								<el-breadcrumb-item><a href="">登录</a></el-breadcrumb-item>
								<el-breadcrumb-item><a href="">激活</a></el-breadcrumb-item>
								<el-breadcrumb-item></el-breadcrumb-item>
							</el-breadcrumb>
						</div>
					</el-col>
				</el-row>
			</el-header>
			<el-main>
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
			</el-main>

		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'home'
	}
</script>
<style>
	a{text-decoration:none}
	.searchClass {
		margin-top: 15px;
		border: 1px solid #c5c5c5;
		border-radius: 20px;
	}


	.searchClass .el-input-group__append {
		border: none;
		background-color: transparent;
	}

	.searchClass .el-input__inner {
		height: 36px;
		line-height: 36px;
		border: none;
		background-color: transparent;
	}

	.searchClass .el-icon-search {
		font-size: 16px;
	}

	.searchClass .centerClass {
		height: 100%;
		line-height: 100%;
		display: inline-block;
		vertical-align: middle;
		text-align: right;
	}

	.searchClass .line {
		width: 1px;
		height: 26px;
		background-color: #c5c5c5;
		margin-left: 14px;
	}

	.searchClass:hover {
		border: 1px solid #D5E3E8;
		background: #fff;
	}

	.searchClass:hover .el-icon-search {
		color: #409eff;
		font-size: 16px;
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
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>
