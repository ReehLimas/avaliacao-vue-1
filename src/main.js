import './assets/main.css'
import './Components/AdicionarTarefa.vue'
import './Components/ListarTarefas.vue'
import './Components/MainComp.vue'
import { computed, createApp, ref } from 'vue'
createApp(App).component('#app')
createApp(ref).component(computed)

