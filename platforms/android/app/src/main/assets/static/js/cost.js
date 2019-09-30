function addCost() {
    var tagList = '';
    var i=0;
    var collapseExample = "collapseExample";
    var checkbox = "checkbox";
    var user = "user";
    while(true) {
        i++;
        collapseExample += i;
        checkbox += i;
        tagList += '<div class="col-4">';
        tagList += '<div class="form-group"><input type="text" class="form-control"></div>';
        tagList += '</div>';
        tagList += '<div class="col-4">';
        tagList += '<div class="form-group"><input type="text" class="form-control"></div>';
        tagList += '</div>';
        tagList += '<button type="button" class="btn btn-white btn-round btn-just-icon" data-toggle="collapse" data-target="#'+collapseExample+'" aria-expanded="false" aria-controls="'+collapseExample+'">';
        tagList += '<i class="material-icons">'+"person_outline"+'</i></button>';
        tagList += '<div class="collapse" id="'+collapseExample+'" aria-expanded="true" style>';
        tagList += '<div class="cdiv"><ul class="ks-cboxtags">';
        tagList += '<li><input type="checkbox" id="'+checkbox+'" value="Rainbow Dash" checked><label for="'+checkbox+'">'+user+'</label></li>';
        tagList += '<li><input type="checkbox" id="'+checkbox+'" value="Rainbow Dash" checked><label for="'+checkbox+'">'+user+'</label></li>';
        tagList += '<li><input type="checkbox" id="'+checkbox+'" value="Rainbow Dash" checked><label for="'+checkbox+'">'+user+'</label></li>';
        tagList += '</ul></div></div></div>';
    }
}