<template>
  <div class='container'>
    <Card v-for='fact in facts' :key='fact.id' :fact='fact' />
  </div>
</template>

<script>
import EventService from '@/services/EventService';
import Card from '../components/Card.vue';

export default {
  name: 'CardList',
  components: {
    Card,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    EventService.getFacts()
      .then((response) => {
        console.log('facts:', response.data);
        this.events = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
