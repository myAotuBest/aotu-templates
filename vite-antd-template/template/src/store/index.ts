import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import user, {UserProps} from './user'

export interface GlobalDataProps {
  user: UserProps;
}

export default createStore<GlobalDataProps>({
  modules:{
    user
  }
});
