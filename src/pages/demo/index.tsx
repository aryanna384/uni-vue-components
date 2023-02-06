import { defineComponent} from 'vue';
import  { ynButton }  from '../../../packages/index'

export default defineComponent(({
name:'demo',
components:{
  ynButton
},
emits:[],
setup() {
return () => (<div>
  <div>in demo</div>
  <ynButton onClick={()=>
          uni.navigateTo({
            url:'../home/index'
          })}/>
</div>);
},
}));
