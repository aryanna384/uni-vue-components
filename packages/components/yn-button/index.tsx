import { defineComponent} from 'vue';

export default defineComponent(({
  name:'ynButton',
  emits:[],
  setup() {
  return () => (
    <div>
      <button onClick={()=>alert('hello upgrade')}>click me</button>
      <div>hello</div>
    </div>
  );
},
}));
