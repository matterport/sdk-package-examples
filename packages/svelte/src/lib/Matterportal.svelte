<script lang="ts">
  import { setupSdk } from '@matterport/sdk'
  import { onMount } from 'svelte'

  onMount(() => {
    const portal = document.getElementById('container-for-matterportal')
    let sdk = null
    const setup = async () => {
      sdk = await setupSdk('YOUR_SDK_KEY', {
        space: 'j4RZx7ZGM6T',
        iframeQueryParams: { qs: 1 },
        container: portal,
      })
    }
    setup()
  })
</script>

<style>
  #container-for-matterportal {
    width: 100%;
    height: 300px;
  }
</style>

<div id="container-for-matterportal" />
