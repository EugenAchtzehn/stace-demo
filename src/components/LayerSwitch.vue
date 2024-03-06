<template>
  <div class="main__layer_section">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="mineHistoryArea2020"
        @click="toggleMineMapLayers('mineHistoryArea2020', true)"
      />
      <label class="from-check-label">{{ passInLayerInfo.nameChinese }}</label>
    </div>
    <div v-if="mineHistoryArea2020">
      <label class="form-label"> 透明度：{{ layerOpacity.mineHistoryArea2020 }} </label>
      <input
        class="form-range"
        type="range"
        v-model="layerOpacity.mineHistoryArea2020"
        step="10"
        @change="changeOpacity('mineHistoryArea2020')"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'LayerSwitch',
  data() {
    return {
      mineHistoryArea2020: '',
      layerOpacity: { mineHistoryArea2020: '' },
    };
  },
  // 接收父層傳入的數值
  props: {
    passInLayerInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['update-opacity', 'toggle-layer'],
  methods: {
    toggleMineMapLayers() {},
    changeOpacity() {},
  },
};
</script>

<style scoped>
.main__layer_section {
  border: 2px solid #0b346e;
  padding: 0.25rem;
  margin: 0.8rem;
}
</style>
