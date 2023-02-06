import { defineComponent} from 'vue';

export default defineComponent(({
  name:'ynButton',
  emits:[],
setup() {
return () => (<div>
  <button>click me</button>
</div>);
},
}));
