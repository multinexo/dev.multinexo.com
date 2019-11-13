function implementTypeahead(item) {
  item.typeahead({
      minLength: 0,
      highlight: true
  }, {
      name: 'pages',
      display: 'title',
      source: pages
  });
  item.bind('typeahead:select', function(ev, suggestion) {
      window.location.href = suggestion.url;
  });
}

var pages = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,

    prefetch: baseurl + '/search.json'
});

$('#search-label').click(function(){
  // Modificar el if si se agrega otro autocomplete con typeahead al sitio

  if (!$(".twitter-typeahead")[1]){
    implementTypeahead($('#search-box'));
  }
});

implementTypeahead($('.search-box-mobile'));

function selectVersion(version) {
    let url = window.location.href;
    new_url = url.replace(/\d+\.\d+\.\d+/, version);
    window.location.href = new_url;
}
