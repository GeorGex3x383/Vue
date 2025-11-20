import { sleep } from "@/helpers/sleep";
import type { ChatMessage } from "@/interfaces/chat-message.interface";
import { YesNoResponse } from "@/interfaces/yes-no.response";
import { ref } from "vue";

export const useChat = () => {

    const isTyping = ref(false);

    const messages = ref<ChatMessage[]>([]);

    const getHerResponse = async() => {
        const resp = await fetch('https://yesno.wtf/api');
        const data = (await resp.json()) as YesNoResponse;
        return data;
    }

    const onMessage = async(text: string) => {
        if (text.length === 0) return;
        messages.value.push({
            id: new Date().getTime(),
            itsMine: true,
            message: text,
        });

        //Evaluar si termina en ?
        if ( !text.endsWith('?')) return;

        // Mostrar burbuja de "typing..."
        isTyping.value = true;
        await sleep(1.5);

        const {answer, image} = await getHerResponse();
        
        // Quitar burbuja antes de la respuesta
        isTyping.value = false;
        
        messages.value.push({
            id: new Date().getTime(),
            itsMine: false,
            message: answer,
            image: image,
        });
    };


    return{
        //Properties
        messages,
        isTyping,

        //Methods
        onMessage,

    }
}