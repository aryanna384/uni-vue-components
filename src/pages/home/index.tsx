import { defineComponent,ref} from 'vue';
import  { ynButton }  from '../../../packages/index'

export default defineComponent(({
  name:'Home',
  emits:[],
  components:{
    ynButton
  },
  setup() {
  const title = ref('Hello')
  return () => (<div>
      <div>
        <ynButton onClick={()=>
          uni.navigateTo({
            url:'../demo/index'
          })}/>
    </div>
  </div>);
},
}));
