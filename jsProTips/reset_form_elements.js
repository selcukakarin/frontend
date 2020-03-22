function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox')
         .removeAttr('checked').removeAttr('selected');
}

// kullanımı:
resetForm($('#myform')); // id ile
resetForm($('form[name=myName]')); // name ile