module.exports = {
    bootstrap: async () => {
        console.log('Bootstrap no server.js');
        // Código de inicialização assíncrona 
    },

    teardown: async () => {
        console.log('Teardown no server.js');
        // Código de finalização assíncrona 
    },

    after: async () => {
        console.log('After');
        await I.closeApp();
    }
};

