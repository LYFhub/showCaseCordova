var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        $(document).on('pageshow', '#teste' ,function(){
            alert("foi");
        });
    }
};

app.initialize();