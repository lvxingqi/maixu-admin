<template>
  <div class="h-full">
    <a-list item-layout="vertical" :data-source="data" :pagination="true">
      <template #header>
        <div class="flex justify-between text-white">
          <div>被邀请人</div>
          <div>开通厅数</div>
          <div>续费厅数</div>
          <div>合计</div>
          <div>金额(音符)</div>
        </div>
      </template>
      <template #renderItem="{ item }">
        <a-list-item>
          <div class="flex justify-between text-white">
            <div>{{ item.name }}</div>
            <div>{{ item.hallsOpened }}</div>
            <div>{{ item.renewval }}</div>
            <div>{{ item.total }}</div>
            <div>{{ item.balance }}</div>
          </div>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script lang="ts" setup>
interface DataItem {
  name: string;
  hallsOpened: number;
  renewval: number;
  total: number;
  balance: number;
}
const data: DataItem[] = [
  {
    name: "张三",
    hallsOpened: 5,
    renewval: 2,
    total: 0,
    balance: 9
  },
  {
    name: "张三",
    hallsOpened: 5,
    renewval: 2,
    total: 0,
    balance: 9
  },
  {
    name: "张三",
    hallsOpened: 5,
    renewval: 2,
    total: 0,
    balance: 9
  },
  {
    name: "张三",
    hallsOpened: 5,
    renewval: 2,
    total: 0,
    balance: 9
  },
  {
    name: "张三",
    hallsOpened: 5,
    renewval: 2,
    total: 0,
    balance: 9
  },
  {
    name: "张三",
    hallsOpened: 5,
    renewval: 2,
    total: 0,
    balance: 9
  },
  {
    name: "张三",
    hallsOpened: 5,
    renewval: 2,
    total: 0,
    balance: 9
  },
  {
    name: "张三",
    hallsOpened: 5,
    renewval: 2,
    total: 0,
    balance: 9
  },
  {
    name: "张三",
    hallsOpened: 5,
    renewval: 2,
    total: 0,
    balance: 9
  },
  {
    name: "张三",
    hallsOpened: 5,
    renewval: 2,
    total: 0,
    balance: 9
  },
  {
    name: "张三",
    hallsOpened: 5,
    renewval: 2,
    total: 0,
    balance: 9
  },
  {
    name: "张三",
    hallsOpened: 5,
    renewval: 2,
    total: 0,
    balance: 9
  },
  {
    name: "张三",
    hallsOpened: 5,
    renewval: 2,
    total: 0,
    balance: 9
  },
  {
    name: "张三",
    hallsOpened: 5,
    renewval: 2,
    total: 0,
    balance: 9
  },
  {
    name: "张三",
    hallsOpened: 5,
    renewval: 2,
    total: 0,
    balance: 9
  },
  {
    name: "张三",
    hallsOpened: 5,
    renewval: 2,
    total: 0,
    balance: 9
  },

];
</script>

<style></style>
