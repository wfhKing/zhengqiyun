<template>
	<!-- 二级页面的首页 -->
	<div id="notice">
		<el-row style="background-color:lightpink;">
			<el-col :span="14" :offset="1">
				<div class="grid-content bg-purple">
					<el-carousel :interval="5000" height="400px">
						<el-carousel-item v-for="item in dataimg" :key="item">
							<img :src="item.src">
							<p class="italictext">{{item.txt}}</p>
						</el-carousel-item>
					</el-carousel>
				</div>
			</el-col>
			<el-col :span="7" :offset="1">
				<el-card class="box-card">
					<div slot="header" class="clearfix" style="line-height: 15px;">
						<span style="color: darkred;font-weight: bold;font-size: 18px;">公告</span>
						<a href="" style="float: right;font-size: 14px;">更多</a>
					</div>
					<div v-for="notice in notices" :key="notice" class="text item">
						<a href="#">{{notice.title}}</a>
						<span style="float: right;">{{notice.date}}</span>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="12" :offset="1">
				<el-card class="box-card">
					<div slot="header" class="clearfix" style="line-height: 10px;">
						<span style="background-color: #e81111;color: white;font-size: 20px;">最新政策</span>
						<a href="#" style="float: right;font-size: 14px;">更多</a>
					</div>
					<div v-for="newest in newests" :key="newest" class="text item">
						<a href="#"><span>[{{newest.level}}]{{newest.title}}</span></a>
						<span style="float: right;">{{newest.date}}</span>
					</div>
				</el-card>
			</el-col>
			<el-col :span="10" :offset="1">
				<el-card class="box-card">
					<div slot="header" class="clearfix" style="line-height: 10px;">
						<span style="background-color: #e81111;color: white;font-size: 20px;">企业信息</span>
						<a href="#" style="float: right;font-size: 14px;">更多</a>
					</div>
					<div v-for="notice in notices" :key="notice" class="text item">
						<a href="#"><span>[全国]{{notice.title}}</span></a>
						<span style="float: right;">{{notice.date}}</span>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'notice',
		data() {
			return {
				// 轮播图
				dataimg: [{
						src: require('../assets/img01.jpg'),
						txt: '一站式服务',
					},
					{
						src: require('../assets/img01.jpg'),
						txt: '国际服务',
					},
					{
						src: require('../assets/img01.jpg'),
						txt: '全网渠道',
					}
				],
				// 公告
				notices: [{
						title: "这里放的是公告标题",
						date: "2019-02-21"
					},
					{
						title: "这里放的是公告标题",
						date: "2019-02-21"
					},

					{
						title: "这里放的是公告标题",
						date: "2019-02-21"
					},
					{
						title: "这里放的是公告标题",
						date: "2019-02-21"
					},
				],
				// 最新政策
				newests: [{
						level:"全国",
						title: "这里放的是最新政策标题",
						date: "2019-02-32",
					},
					{
						level:"全国",
						title: "这里放的是最新政策标题",
						date: "2019-02-32",
					},
					{
						level:"全国",
						title: "这里放的是最新政策标题",
						date: "2019-02-32",
					},
					{
						level:"全国",
						title: "这里放的是最新政策标题",
						date: "2019-02-32",
					},
				]
			}
		}
	}
</script>

<style scoped>
	#notice ul li {
		margin-bottom: 10px;
	}

	.text {
		font-size: 16px;
	}

	.item {
		margin-bottom: 10px;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.box-card {
		text-align: left;
	}
</style>
