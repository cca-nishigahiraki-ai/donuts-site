import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

export default {
	props : ['count'],
	setup(props) {
		console.log(props);
		const count = ref(0);
		return { count };
	},
	template :
		`<button @click="count++">You clicked me {{ count }} times.</button>`
}
 