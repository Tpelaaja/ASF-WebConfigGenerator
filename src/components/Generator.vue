<template>
    <form method="post" action="" class="form" id="asf-form" onsubmit="return false;">
        <div class="row align-center" v-if="versions.length > 1">
            <div class="col col-2">
                <div class="form-input">
                    <select v-model="selectedVersion" id="version">
                        <option v-for="version in versions" :value="version">{{ version }}</option>
                    </select>
                </div>
            </div>
        </div>

        <fieldset v-for="group in schema">
            <legend>{{ $t(group.legend) }}</legend>
            <component v-for="inputSchema in group.fields" :is="inputSchema.type" :schema="inputSchema" :key="inputSchema.field"></component>
        </fieldset>

        <div class="form-item">
            <button @click.prevent="downloadJSON" class="button">{{ $t('button.download') }}</button>
        </div>
    </form>
</template>

<script>
  import Config from './mixin/Config.vue';
  export default {
    name: 'CLIPlusConfig',
    mixins: [Config],
    data() { return { type: 'cli', filename: 'config.json' }; },
    methods: {
      processModelToJSON(model) {
        if (model.Blacklist && model.Blacklist.length) {
          model.Blacklist = model.Blacklist.map(item => parseInt(item, 10)).filter(item => !isNaN(item) && item > 0);
        }
        Object.entries(model).forEach(([key, value]) => {
          if (typeof value === 'string' && value === '') delete model[key];
        })
        return model;
      }
    }
  };
</script>