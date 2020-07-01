<template>
  <v-container fluid>
    <v-row dense
           class="mx-1">
      <v-col cols="12"
             sm="12"
             md="3"
             xs="12">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2">
            <div class="d-flex justify-space-between pa-2">
              <div>
                <div class="subtitle-1">本月累计销量</div>
                <div><span class="text-h4 font-weight-bold">20,407</span> <span>KL</span> </div>
              </div>
              <div class="align-self-end subtitle-1">
                <div>同期占比为 2.2%</div>
                <div>预算完成率为 2.1%</div>
              </div>
            </div>
            <v-divider></v-divider>
            <v-card-text class="pa-2">
              同期占比为 2.2%， 预算完成率为 2.1%
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12"
             sm="12"
             md="3"
             xs="12">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2">

            <v-card-title class="pa-2">本月累计销量</v-card-title>
            <v-card-text class="pa-2">
              <div class="text-center"> <span class="text-h4 font-weight-bold">20,407</span> <span>KL</span> </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="pa-2">
              同期占比为 2.2%， 预算完成率为 2.1%
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12"
             sm="12"
             md="3"
             xs="12">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2">
            <v-card-title class="pa-2">2020年06月销量</v-card-title>
            <v-card-text class="pa-2">
              <div class="text-center"> <span class="text-h4 font-weight-bold">109万</span> <span>KL</span> </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="pa-2">
              当月增量 16,266 千升，当月增长率 1.5% ，当月预算完成率 98.9%
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12"
             sm="12"
             md="3"
             xs="12">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2">
            <v-card-title class="pa-2">2020年01-06月月销量</v-card-title>
            <v-card-text class="pa-2">
              <div class="text-center"> <span class="text-h4 font-weight-bold">440万</span> <span>KL</span> </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="pa-2">
              累计增量 -333,992 千升，累计增长率 -7.1% ，累计预算完成率 89.8%
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12"
             sm="12"
             md="10"
             xs="12">
        <v-card min-height="300px"
                height="100%">
          <div id="chart1"
               ref="chart1"
               style="height:100%">
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"
             sm="12"
             md="4"
             xs="12">
        <v-card min-height="400px"
                height="100%">
          <div ref="chart2"
               style="height:100%">
          </div>
        </v-card>
      </v-col>
      <v-col cols="12"
             sm="12"
             md="4"
             xs="12">
        {{$vuetify.theme.dark}}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
//var echarts = require('echarts')
// 引入柱状图
require('echarts/lib/chart/bar')
// 引入提示框、标题、图例组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require("echarts/lib/component/legend")
export default {
  data () {
    return {
      chart1: null,
      chart2: null
    }
  },
  watch: {
    // 如果 `quest` 发生改变，这个函数就会运行
    '$vuetify.theme.dark': function (/*newVal, oldVal*/) {
      this.chart1.dispose()
      this.chart2.dispose()
      this.chart1Init()
      this.chart2Init()
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.chart1Init()
      this.chart2Init()
    }, 50)
    this.chartOnResize()

  },
  methods: {
    /* 绘制图表1 */
    chart1Init: function () {
      //基于准备好的dom，初始化echarts实例
      this.chart1 = echarts.init(this.$refs.chart1, this.$vuetify.theme.dark ? 'dark' : '')
      // 绘制图表
      this.chart1.setOption({
        backgroundColor: 'transparent',
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        grid: {
          left: 30,
          top: '10%',
          right: 30
        },
        xAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          }
        },
        series: [{
          name: '销量',
          type: 'bar',
          itemStyle: {
            normal: {
              barBorderRadius: 20,
            }
          },
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    },
    /* 绘制图表2 */
    chart2Init: function () {
      //基于准备好的dom，初始化echarts实例
      this.chart2 = echarts.init(this.$refs.chart2, this.$vuetify.theme.dark ? 'dark' : '')
      // 绘制图表
      var xAxisData = [];
      var data1 = [];
      var data2 = [];
      for (var i = 0; i < 100; i++) {
        xAxisData.push('类目' + i);
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
      }

      this.chart2.setOption({
        backgroundColor: 'transparent',
        grid: {
          left: 50,
          top: 60,
          right: 30
        },
        title: {
          text: '柱状图动画延迟'
        },
        legend: {
          //data: ['bar', 'bar2']
          align: 'right',
          right: 30
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          splitLine: {
            show: false
          },
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: '#4c9bfd',
            rotate: 45          },
          boundaryGap: false
        },
        yAxis: {
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { color: '#4c9bfd' },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#aaa', '#ddd'],
              type: 'dashed',
              width: 1
            }
          }
        },
        series: [{
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: function (idx) {
            return idx * 10;
          }
        }, {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: function (idx) {
            return idx * 10 + 100;
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5;
        }
      })
    },
    /* 图表缩放 */
    chartOnResize: function () {
      window.onresize = () => {
        this.chart2.resize()
        this.chart1.resize()
      }
    }
  },
  components: {}
}
</script>
