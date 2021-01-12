<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="re0-dialog-overlay" @click="onClickOverlay"></div>
      <div class="re0-dialog-wrapper">
        <div class="re0-dialog">
          <header>
            <slot name="title"></slot>
            <span class="re0-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot name="content"></slot>
          </main>
          <footer>
            <Button level="main" @click="confirm">确认</Button>
            <Button @click="cancel">取消</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang="ts">
import Button from '../Button.vue'

export default {
  components: {
    Button
  },
  props: {
    title: {
      type: String,
      default: '提示'
    },
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    confirm: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false)
    }

    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close()
      }
    }
    const confirm = () => {
      if (props.confirm && props.confirm() !== false) {
        props.confirm()
        close()
      }
    }
    const cancel= () => {
      // props.cancel && props.cancel()
      props.cancel?.()
      close()
    }
    return { close, onClickOverlay, confirm, cancel }
  }
}
</script>

<style lang="scss">
.re0-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: fade_out(black, 0.5);
  z-index: 10;
}
.re0-dialog-wrapper {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  .re0-dialog {
    background: white;
    border-radius: 4px;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    min-width: 15em;
    max-width: 90%;
    > header {
      padding: 12px 16px;
      border-bottom: 1px solid #d9d9d9;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
      .re0-dialog-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;
        &::before, &::after {
          content: '';
          position: absolute;
          height: 1px;
          background: black;
          width: 100%;
          top: 50%;
          left: 50%;
        }
        &::before {
          transform: translate(-50%, -50%) rotate(-45deg);
        }
        &::after {
          transform: translate(-50%, -50%) rotate(45deg);
        }
      }
    }
    > main {
      padding: 12px 16px;
    }
    > footer {
      padding: 12px 16px;
      border-top: 1px solid #d9d9d9;
      text-align: right;
    }
  }
}
</style>