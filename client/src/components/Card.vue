<template>
  <div class="fact-card">
    <h4>By: {{ fact.user }}</h4>
    <span>Status: {{ fact.status.verified }}</span>
    <span>createdAt: {{ fact.createdAt }}</span>
    <div class="status">
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
.status {
  display: flex;
  justify-content: center;
}
.status-icon-r,
.status-icon-g {
  margin: auto 0;
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(214, 61, 46);
  border-radius: 50%;
}
.status-icon-g {
  background: rgb(92 199 12);
}
img {
  margin-top: 5%;
}
.fact-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.fact-card > .title {
  margin: 0;
}
.fact-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
