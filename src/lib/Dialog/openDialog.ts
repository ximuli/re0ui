import Dialog from './Dialog.vue'
import { createApp, h } from 'vue'

export const openDialog = (options) => {
  console.log(1)
  const { title, content, confirm, cancel } = options
  const div = document.createElement('div')
  console.log(2)
  document.body.appendChild(div)
  const close = () => {
    app.unmount(div)
    div.remove()
  }
  console.log(3)
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newVal) => {
            if (newVal === false) {
              close()
            }
          },
          confirm, cancel
        },
        {
          title, content
        }
      )
    }
  })

  app.mount(div)
}