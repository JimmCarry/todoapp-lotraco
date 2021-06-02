<template>
  <div class="home">
    <main>
      <TodoHeader />
      
      <transition-group name="todo" tag="ul" class="todo-lists">
        <li :class="{ completed: item.completed == true, uncompleted: item.completed == false }" v-for="item in itemsToDone" :key="item.id" class="todo-list">
          <span class="check-button">
            <a @click.prevent="itemCompleted(item)" href="#">
              <svg class="completed-button" viewBox="0 -46 417.81333 417" xmlns="http://www.w3.org/2000/svg"><path d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0"/></svg>
            </a>
            
            <div>
              <h2 class="todo-list-title">{{ item.title }}</h2>
              <p class="todo-list-text">{{ item.text }}</p>
             
            </div>
          </span>
          
          <a @click.prevent="removeItem(item.id)" href="#">
            <svg class="remove-button" viewBox="0 0 20 20">
              <path fill="#fff" d="M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z M13.388,9.624H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h6.775c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z"></path>
            </svg>
          </a>
          
        </li>
      </transition-group>

      <div class="todo-list-done">
        <a href="#" @click.prevent="toggle()" :class="{ active: toggleItemsDone == true, inactive: toggleItemsDone == false }" class="done-toggle">
          <svg  class="icon-done" viewBox="0 0 20 20">
            <path fill="none" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
          </svg>
          <h3>Dokončeno</h3>
          <span> {{itemsCompleted.length}} </span>
        </a>
        
        <transition-group v-if="toggleItemsDone" name="todo" tag="ul" class="todo-lists">
          <li :class="{ completed: item.completed == true, uncompleted: item.completed == false }" v-for="item in itemsCompleted" :key="item.id" class="todo-list">
            <span class="check-button">
              <a @click.prevent="itemCompleted(item)" href="#">
                <svg class="completed-button" viewBox="0 -46 417.81333 417" xmlns="http://www.w3.org/2000/svg"><path d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0"/></svg>
              </a>
              <div>
                <h2 class="todo-list-title">{{ item.title }}</h2>
                <p class="todo-list-text">{{ item.text }}</p>
              </div>
            </span>
            <a @click.prevent="removeItem(item.id)" href="#">
              <svg class="remove-button" viewBox="0 0 20 20">
                <path fill="#fff" d="M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z M13.388,9.624H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h6.775c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z"></path>
              </svg>
            </a>
          </li>
        </transition-group>

      </div>
    </main>
    <footer>
      <div class="add-new-form">
        <svg class="icon-add-item" viewBox="0 0 20 20">
					<path fill="none" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
				</svg>
        <input @keydown.prevent.enter="addNewItem" type="text" v-model="newItemText" ref="new" autofocus placeholder="Přidat úkol">
      </div>
    </footer>
  </div>
</template>

<script>
import TodoHeader from '../components/TodoHeader'
import { reactive, toRefs, computed } from 'vue'

export default {
  components: {
        TodoHeader
  },
  setup () {
    const state = reactive({
      newItemText: '',
      toggleItemsDone: true,
      items: [
        {
          id: 0,
          title: 'Úkol 1',
          text: 'Úloha 1',
          completed: false
        },
        {
          id: 1,
          title: 'Úkol 2',
          text: 'Úloha 2',
          completed: false
        },
        {
          id: 2,
          title: 'Úkol 3',
          text: 'Úloha 3',
          completed: true
        },
      ]
    })

    const toggle = () => {
      state.toggleItemsDone = !state.toggleItemsDone;
    }

    const itemsToDone = computed(() => {
      window.eventBus.emit('items-to-done', state.items.filter(item => !item.completed));
      return state.items.filter(item => !item.completed);
    })

    const itemsCompleted = computed(() => {
      return state.items.filter(item => item.completed);
    })

    const addNewItem = () => {
      if (!state.newItemText) {
        return;
      } else {
        if (state.items.length == 0) {
        state.items.push({
          id: 0,
          title: 'Úkol ' + 1,
          text: state.newItemText,
          completed: false
        })
      } else {
        let newId = Math.max(...state.items.map(item => item.id)) + 1;
      
        state.items.push({
          id: newId,
          title: 'Úkol ' + (newId + 1),
          text: state.newItemText,
          completed: false
        })
      }
      
      
    }
    state.newItemText = '';
    } 
    

    const removeItem = (index) => {
      let answer = confirm('really wanna delete?');
      if (answer == true ) {
        state.items = state.items.filter(item => item.id != index)
      } return;
      
    }

    const itemCompleted = (item) => {
      item.completed = !item.completed;
    }
  
    return {
      ...toRefs(state),
      itemsToDone,
      itemsCompleted,
      addNewItem,
      removeItem,
      itemCompleted,
      toggle
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 75%;
    background-image: url('../assets/wall.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-between;
  }
  .todo-lists {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    
  }
  .todo-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  .check-button {
    display: flex;
    align-items: center;
    span {
      border: 1px solid black;
      border-radius: 100%;
    }
    .completed-button {
      padding: 2px;
      margin: 1rem;
      width: 15px;
      height: 15px;
      border: 1px solid gray;
      border-radius: 100%;
      path {
        fill: #fff;
      }
    }
  }
  .completed {
    opacity: 0.7;
  }
  .completed .completed-button {
    background-color: gray;
  }
  a:hover .completed-button {
    border: 1px solid black;
  }
  .completed h2 {
    text-decoration: line-through;
  }
  .todo-list-title {
    margin: 0;
  }
  .todo-list-text {
    margin: 0;
  }
  .remove-button {
    margin: 1rem;
    width: 25px;
    path {
      fill: gray;
    }
  }
  .remove-button:hover path {
    fill: red;
  }
  
  .icon-done {
    width: 20px;
    transform: rotate(-90deg);
    path {
      fill: #fff;
    }
  }
  .inactive .icon-done {
    transform: rotate(90deg);
    transition: all 0.1s ease-in;
  }
  .active .icon-done {
    transform: rotate(-90deg);
    transition: all 0.1s ease-in;
  }
  .add-new-form {
    display: flex;
    padding: 1rem;
    background-color: black;
    opacity: 0.6;
    border-radius: 5px;
    svg {
      padding: 0 0.5rem;
    }
    input {
      font-size: 1rem;
      padding: 0.5rem;
      width: 100%;
      background-color: transparent;
      border: none;
      color: #fff;
    }
    input:focus-visible {
      outline: none;
    }
    .icon-add-item {
      width: 20px;
      transform: rotate(-45deg);
      path {
        fill: #fff;
    }

  }
}
.done-toggle {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  width: 8rem;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  text-decoration: none;
  h3 {
    margin: 0;
  }
}
.todo-enter-active,
.todo-leave-active {
  transition: all 0.3s;
}

.todo-enter-from,
.todo-leave-to {
  opacity: 0;
  transform: scale(0.75);
}
@media (max-width: 920px) {
  .home {
    width: 80%;
    height: 100%;
    margin: 0 auto;
  }
}
</style>