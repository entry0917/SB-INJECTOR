const jeviRunCommand = [
"$.get('https://raw.githack.com/entry0917/Specialblock/master/block.js');",
"$.get('https://raw.githack.com/entry0917/max/main/b.js');"
];

document.addEventListener('DOMContentLoaded', function() {
    $('.ui.dropdown').dropdown({direction:'upward'}); 
    var go = $('#go')[0];
    go.addEventListener('click', function() {
        if($('#server > div.menu > div.item.active.selected').attr('data-value')){
            Inject(jeviRunCommand[$('#server > div.menu > div.item.active.selected').attr('data-value')]);
        }
    });
});

function Inject(injectCode) {
    chrome.tabs.executeScript(null, { file: "jquery.min.js" }, function() {
        chrome.tabs.executeScript(null, {
            "code": injectCode
        }, function() {
            if (chrome.extension.lastError) {
                document.body.innerText = 'There was an error injecting script : \n' + chrome.extension.lastError.message;
            }
        });
    });
}
