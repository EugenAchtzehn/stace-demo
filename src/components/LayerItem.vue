<template>
  <div class="main__layer_section">
    <div class="layer-title">{{ layer.name }}</div>
    <div class="layer-meta">
      {{ layer.type }}<span v-if="layer.params?.subType"> / {{ layer.params?.subType }}</span>
    </div>
    <label class="layer-opacity-label" :for="`opacity-${layer.id}`"
      >透明度: {{ Math.round(localOpacity * 100) }}%</label
    >
    <input
      :id="`opacity-${layer.id}`"
      type="range"
      min="0"
      max="100"
      step="1"
      v-model.number="opacityPercent"
      @input="onOpacityChange"
    />
  </div>
</template>

<script>
  export default {
    name: "LayerItem",
    props: {
      layer: {
        type: Object,
        required: true,
      },
    },
    emits: ["opacity-change"],
    data() {
      return {
        opacityPercent: Math.round((this.layer?.params?.opacity ?? 1) * 100),
      };
    },
    computed: {
      localOpacity() {
        return this.opacityPercent / 100;
      },
    },
    watch: {
      "layer.params.opacity": {
        handler(nextOpacity) {
          const nextPercent = Math.round((nextOpacity ?? 1) * 100);
          if (nextPercent !== this.opacityPercent) {
            this.opacityPercent = nextPercent;
          }
        },
      },
    },
    methods: {
      onOpacityChange() {
        this.$emit("opacity-change", {
          id: this.layer.id,
          opacity: this.localOpacity,
        });
      },
    },
  };
</script>

<style scoped>
  .main__layer_section {
    border: 2px solid #000;
    padding: 0.5rem;
    margin: 0.5rem;
  }

  .layer-title {
    font-weight: 700;
  }

  .layer-meta {
    color: #666;
    margin-bottom: 0.5rem;
  }

  .layer-opacity-label {
    display: inline-block;
    margin-bottom: 0.25rem;
  }

  input[type="range"] {
    width: 100%;
  }
</style>
