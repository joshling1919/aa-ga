function insertProperty(websiteURL, name) {
  var request = gapi.client.analytics.management.webproperties.insert(
    {
      'accountId': '91940833',
      'resource': {
        'websiteUrl': websiteURL,
        'name': name
      }
    });
  request.execute(function (response) { console.log(response) });
}

function handleSubmit(event) {
  debugger;
}

var insert = document.getElementById('insert');
insert.addEventListener('submit', handleSubmit);
