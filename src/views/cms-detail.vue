<template>
  <div class="cms-index__wrapper wap__wrapper">
    <vue-drawer-layout
      ref="drawer"
      :content-drawable="true">
      <div class="drawer-content" slot="drawer">
        <!-- drawer-content -->
        <ul>
          <li @click="toggle('isShow1')">贷款申请</li>
          <li @click="toggle('isShow2')">业务申请审核</li>
          <li @click="toggle('isShow3')">风控初审</li>
          <li @click="toggle('isShow4')">风控终审</li>
          <li @click="toggle('isShow5')">核对发标审批</li>
          <li @click="toggle('isShow6')">待审资料</li>
          <li @click="toggle('isShow7')">待补资料</li>
        </ul>
      </div>
      <div class="content__wrapper" slot="content">
        <!-- main-content -->
        <div  v-show="contentVisiable === 'isShow1'">贷款申请</div>
        <div v-show="contentVisiable === 'isShow2'">
          <header>
            <select>
              <option>全部</option>
              <option>公司1</option>
              <option>公司2</option>
              <option>公司3</option>
              <option>公司4</option>
              <option>公司5</option>
            </select>
            <label>借款人姓名</label>
            <input></input>
          </header>
          <div class="main__wrapper">
            <div class="table">
              <span>序号</span>
              <span>编号</span>
              <span>公司</span>
              <span>业务品种</span>
            </div>
            <div v-for="(item, index) of list" :key="index">
              <div @click="toggleDetail(index)" class="table">
                <span>{{ index }}</span>
                <span>{{ item.id }}</span>
                <span>{{ item.name }}</span>
                <span>{{ item.ywpz }}</span>
              </div>
              <div v-show="detailVisiable === index" class="detail__wrapper">
                <p>
                  <span>序号</span>
                  <span>{{ index }}</span>
                </p>
                <p>
                  <span>编号</span>
                  <span>{{ item.id }}</span>
                </p>
                <p>
                  <span>公司</span>
                  <span>{{ item.name }}</span>
                </p>
                <p>
                  <span>借款人姓名</span>
                  <span>{{ item.jkrName }}</span>
                </p>
                <p>
                  <span>借款人电话</span>
                  <span>{{ item.tel }}</span>
                </p>
                <p>
                  <span>申请金额</span>
                  <span>{{ item.money }}</span>
                </p>
                <p>
                  <span>申请期限</span>
                  <span>{{ item.time }}</span>
                </p>
                <p>
                  <span>业务品种</span>
                  <span>{{ item.ywpz }}</span>
                </p>
                <p>
                  <span>电核情况</span>
                  <span>{{ item.dhqk }}</span>
                </p>
                <p>
                  <span>申请时间</span>
                  <span>{{ item.application }}</span>
                </p>
                <p>
                  <span>编号</span>
                  <span>{{ item.id }}</span>
                </p>
                <p>
                  <span>审核状态</span>
                  <span>{{ item.shzt }}</span>
                </p>
                <p>
                  <span>标种类型</span>
                  <span>{{ item.bzlx }}</span>
                </p>
                <button>审核</button>
              </div>
            </div>
          </div>
        </div>
        <div v-show="contentVisiable === 'isShow3'">风控初审</div>
        <div v-show="contentVisiable === 'isShow4'">风控终审</div>
        <div v-show="contentVisiable === 'isShow5'">核对发表审批</div>
        <div v-show="contentVisiable === 'isShow6'">待审资料</div>
        <div v-show="contentVisiable === 'isShow7'">待补资料</div>
      </div>
    </vue-drawer-layout>
  </div>
</template>

<script>

export default {
  data () {
    return {
      contentVisiable: 'isShow1',
      detailVisiable: undefined,
      list: [{
        id: 'WHHC171212001',
        name: '深圳珈海创财富管理有限公司1',
        jkrName: '颜朝杰',
        tel: '18666944767',
        money: '13000',
        time: 4,
        ywpz: '汽车贷款',
        dhqk: '否',
        application: '2017-12-12',
        shzt: '风控初审',
        bzlx: '原标',
        cz: '审核'
      }, {
        id: 'WHHC171212002',
        name: '深圳珈海创财富管理有限公司2',
        jkrName: '颜朝杰',
        tel: '18666944767',
        money: '23000',
        time: 4,
        ywpz: '汽车贷款',
        dhqk: '否',
        application: '2017-12-12',
        shzt: '风控初审',
        bzlx: '原标',
        cz: '审核'
      }, {
        id: 'WHHC171212003',
        name: '深圳珈海创财富管理有限公司3',
        jkrName: '颜朝杰',
        tel: '18666944767',
        money: '33000',
        time: 4,
        ywpz: '汽车贷款',
        dhqk: '否',
        application: '2017-12-12',
        shzt: '风控初审',
        bzlx: '原标',
        cz: '审核'
      }, {
        id: 'WHHC171212004',
        name: '深圳珈海创财富管理有限公司4',
        jkrName: '颜朝杰',
        tel: '18666944767',
        money: '43000',
        time: 4,
        ywpz: '汽车贷款',
        dhqk: '否',
        application: '2017-12-12',
        shzt: '风控初审',
        bzlx: '原标',
        cz: '审核'
      }]
    }
  },
  methods: {
    toggle (data) {
      this.contentVisiable = data
    },
    toggleDetail (index) {
      this.detailVisiable = index
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../styles/base';

  .cms-index__wrapper {
    .drawer-content {
      ul li {
        height: 30px;
        border-bottom: 1px solid #000;
      }
    }
    .content__wrapper {
      .main__wrapper {
        table {
          width: 100%;
          font-size: 24*@rem;
        }
      }
      .detail__wrapper {
        border: 1px solid #000;
        p {
          display: flex;
          flex-grow: 1;
          span {
            &:first-child {
              width: 25%;
            }
          }
        }
      }
    }
    .table {
      display: flex;
      font-size: 24*@rem;
      span {
        flex-grow: 1;
      }
    }
  }

</style>
