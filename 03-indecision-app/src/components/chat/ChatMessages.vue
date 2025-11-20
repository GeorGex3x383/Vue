<template>
     <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
      <div class="flex flex-col space-y-2">
        <!-- Messages go here -->
        <!-- Example Message -->
        <ChatBubble
        v-for="message in messages"
        :key="message.id" 
        v-bind="message"
        />
        <!-- :its-mine="message.itsMine" 
        :message="message.message"
        :image="message.image"  -->
      <!-- Burbuja de typing -->
      <div v-if="isTyping" class="typing-bubble">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>

      </div>
    </div>
</template>

<script setup lang="ts">
import { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref, watch } from 'vue';
interface Props{
  messages: ChatMessage[];
  isTyping: boolean;
}


const messagesComplete = defineProps<Props>();

const chatRef = ref<HTMLDivElement|null>(null);

watch(messagesComplete.messages, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
    top: chatRef.value.scrollHeight,
    behavior: 'smooth',
    });
  }, 100);
});

</script>

