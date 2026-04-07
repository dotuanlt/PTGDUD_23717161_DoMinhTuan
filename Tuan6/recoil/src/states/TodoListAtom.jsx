import {atom} from 'recoil'

const TodoListAtom = atom({
    key: "TodoListAtom",
    default: []
});

export default TodoListAtom