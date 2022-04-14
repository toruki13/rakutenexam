<template>
  <div class="fact-card">
    <h4>By: {{ fact.user }}</h4>
    <span>Status: {{ fact.status.verified }}</span>
    <span>createdAt: {{ fact.createdAt }}</span>
    <div class="ContainerText">
      <h1>{{ fact.text }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fact: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      status: this.fact.status,
    };
  },
};
</script>

<style>
.fact-card {
  width: 320px;
  height: auto;
  min-height: 450px;
  background: rgb(80, 89, 117);
  border-radius: 20px;
  overflow: hidden;
  padding: 10px 15px;
  margin-bottom: 24px;
  margin-right: 10px;
  transition: all 0.2s linear;
  cursor: pointer;
  color: white;
}
.ContainerText {
  display: flex;
  justify-content: center;
}
.fact-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
</style>
