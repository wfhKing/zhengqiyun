<template>
	<div id="policy">
		<el-row :gutter="20">
		  <el-col :span="6">
			  <div class="grid-content bg-purple">
				  <el-row>
					<el-card :body-style="{ padding: '0px' }">
					  <img src="../assets/1.jpg" class="image">
					  <div style="padding: 14px;">
						<span>最新政策</span>
						<el-button type="text" class="button">更多</el-button>
						<div class="bottom clearfix">						  
						  <p>xxxx</p>
						</div>
					  </div>
					</el-card>
				</el-row>
			  </div>
		  </el-col>
		  <el-col :span="6">
			  <div class="grid-content bg-purple">
				  <el-row>
				  	<el-card :body-style="{ padding: '0px' }">
				  	<img src="../assets/1.jpg" class="image">
				  	<div style="padding: 14px;">
				  		<span>最新政策</span>
				  		<el-button type="text" class="button">更多</el-button>
				  		<div class="bottom clearfix">						  
				  		<p>xxxx</p>
				  		</div>
				  	</div>
				  	</el-card>
				  </el-row>
			  </div>
		  </el-col>
		  <el-col :span="6">
			  <div class="grid-content bg-purple">
				  <el-row>
				  	<el-card :body-style="{ padding: '0px' }">
				  	<img src="../assets/1.jpg" class="image">
				  	<div style="padding: 14px;">
				  		<span>最新政策</span>
				  		<el-button type="text" class="button">更多</el-button>
				  		<div class="bottom clearfix">						  
				  		<p>xxxx</p>
				  		</div>
				  	</div>
				  	</el-card>
				  </el-row>
			  </div>
		  </el-col>
		  <el-col :span="6">
			  <div class="grid-content bg-purple">
				  <el-row>
				  	<el-card :body-style="{ padding: '0px' }">
				  	<img src="../assets/1.jpg" class="image">
				  	<div style="padding: 14px;">
				  		<span>最新政策</span>
				  		<el-button type="text" class="button">更多</el-button>
				  		<div class="bottom clearfix">						  
				  		<p>xxxx</p>
				  		</div>
				  	</div>
				  	</el-card>
				  </el-row>
			  </div>
		   </el-col>
		</el-row>
		<el-row :gutter="20">
		  <el-col :span="14">
			  <div class="grid-content bg-purple">
				  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
					  <el-tab-pane label="市级" name="first">

					  </el-tab-pane>
					  <el-tab-pane label="香洲" name="second">
						  
					  </el-tab-pane>
					  <el-tab-pane label="斗门" name="third">
						  
					  </el-tab-pane>
					  <el-tab-pane label="金湾" name="four">
						  
					  </el-tab-pane>
					  <el-tab-pane label="横琴" name="five">
						  
					  </el-tab-pane>
					  <el-tab-pane label="高新" name="six">
						  
					  </el-tab-pane>
					  <el-tab-pane label="保税" name="seven">
						  
					  </el-tab-pane>
					  <el-tab-pane label="万山" name="eight">
						  
					  </el-tab-pane>
				  </el-tabs>
			  </div>
		  </el-col>
		  <el-col :span="10">
			  <div class="grid-content bg-purple">
				  <a href="#"><img style="width: 80px; height: 100px;" src="../assets/logo.png"/>培训</a>
				  <a href="#"><img style="width: 80px; height: 100px;" src="../assets/logo.png"/>人才</a>
				  <a href="#"><img style="width: 80px; height: 100px;" src="../assets/logo.png"/>律师</a>
				  <a href="#"><img style="width: 80px; height: 100px;" src="../assets/logo.png"/>申报</a>
			  </div>
		   </el-col>
		</el-row>	
	</div>
</template>

<script>
	
	 export default {
    data() {
      return {
        activeName2: 'first',
		currentDate: new Date()
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped>
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
    background: white;
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
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
