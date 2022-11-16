{ setupSdk } = require('@matterport/sdk')

class MPMain
  constructor: ->
    console.log 'hello from coffeescript'
    @init() # async
  init: =>
    sdk = await setupSdk 'YOUR_SDK_KEY',
      space: 'j4RZx7ZGM6T'
      iframeQueryParams: {'qs': 1}

    sdk.App.state.subscribe ({ phase }) =>
      console.log 'Phase:', phase

module.exports = MPMain
