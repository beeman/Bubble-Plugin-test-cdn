function(properties, context) {
   	function setupSdk() {
    	KineticSdk.setup({
	    	endpoint: context.keys.endpoint,
      		environment: context.keys.environment,
      		index: parseInt(context.keys.index),
            logger: console,
        }).then((sdk) => {
            window.sdk = sdk;
        });
    }
    setupSdk()
}