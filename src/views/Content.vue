<template>
  <v-row dense
         class="mx-1">
    <v-col cols="12"
           sm="12"
           md="6"
           xs="12">
      <v-card>
        <v-img class="white--text align-end"
               :aspect-ratio="21 / 6"
               src="https://picsum.photos/1920/1080?random">
          <v-card-title>Random Photo</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">Random Photo</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>https://picsum.photos/1920/1080?random</div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12"
           sm="12"
           md="6"
           xs="12">
      <v-card>
        <v-img class="white--text align-end"
               :aspect-ratio="21 / 6"
               src="/static/img/tea.jpg">
          <v-card-title>Tea</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">Tea</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Tea</div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12"
           sm="12"
           md="2"
           xs="12">
      <v-card>
        <v-img src="/static/img/fu.png">
        </v-img>
        <v-card-title>童子拜佛</v-card-title>
        <v-card-subtitle>童子拜佛</v-card-subtitle>
        <v-card-text class="text--primary">
          观音菩萨妙身现,杨柳净瓶救苦难
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12"
           sm="12"
           md="10"
           xs="12">
      <v-card id="chartCard"
              ref="chartCard"
              height="100%">
        <div ref="chart1"
             style="height:100%;width:100%"></div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/bar')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  data () {
    return {
      chart: null
    }
  },
  mounted: function () {
    this.chartInit()
    this.chart.resize()
    this.chartOnSize()
  },
  methods: {
    chartInit: function () {
      //基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(this.$refs.chart1)
      //document.getElementById("chart1").style.height = 200
      //console.log(this.$refs.chartCard.$el.style.height)
      //let myChart = echarts.init(document.getElementById("chart1"))
      // 绘制图表
      this.chart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    },
    chartOnSize: function () {
      const _self = this
      window.addEventListener('resize', function () {
        _self.chart.resize()

      })
    }
  },
  components: {}
}
</script>
