var ListControler = {
    
    init: function () {
      ListControler.setForm();  
    },
    
    setForm: function () {
        var form = document.querySelector('form');
        form.addEventListener('submit', function (event) {
        alert(form.name.value);
        event.preventDefault();
        });
    }
}

ListControler.init();