<template>
  <div class="re0-dialog-overlay"></div>
  <div class="re0-dialog-wrapper">
    <div class="re0-dialog">
      <header>
        标题
        <span class="re0-dialog-close"></span>
      </header>
      <main>
        <p>苟利国家生死以，</p>
        <p>岂因祸福避趋之。</p>
      </main>
      <footer>
        <Button level="main">确认</Button>
        <Button>取消</Button>
      </footer>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  components: {
    Button
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