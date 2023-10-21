import type {
  IConfig,
  IHooks,
  IPluginContext
} from  '../../autoinstallers/rush-plugins/node_modules/rush-init-project-plugin'

const config: IConfig = {
  prompts: [],
  plugins: [
    {
      apply: (hooks: IHooks, pluginContext: IPluginContext) => {
        hooks.answers.tap('packageFolder', (ans) => {
          ans.packageFolder = 'packages'
          return ans
        })
      }
    },
  ],
  defaultProjectConfiguration: {
    shouldPublish: true,
    reviewCategory: 'node'
  }
}

export default config
