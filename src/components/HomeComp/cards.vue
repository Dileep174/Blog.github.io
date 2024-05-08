<template>
    <div>
      <div v-for="(card, index) in cards" :key="index">
        <Card :title="card.title" :description="card.description" :image="card.image" />
      </div>
    </div>
  </template>
  
  <script>
  import Card from './components/Card.vue'; // Import the Card component
  
  export default {
    components: {
      Card, // Register the Card component
    },
    data() {
      return {
        cards: [ // Define dynamic card data
          { title: 'Card 1', description: 'Description for card 1', image: 'card1.jpg' },
          { title: 'Card 2', description: 'Description for card 2', image: 'card2.jpg' },
          // Add more card data as needed
        ],
      };
    },
  };
  </script>
  