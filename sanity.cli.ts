/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: { projectId: 'gxkokz6h', dataset: 'production' },
  deployment: { appId: 'i84yzk8koj72ww8iefyekt71' },
})
