ALL_PROPERTIES = [
  {
    websiteURL: 'www.test1.com',
    name: 'test1'
  },
  {
    websiteURL: 'www.test2.com',
    name: 'test2'
  }
];

function insertProperty(property) {
  debugger;
  var request = gapi.client.analytics.management.webproperties.insert(
    {
      'accountId': '91940833',
      'resource': {
        'websiteUrl': property.websiteURL,
        'name': property.name
      }
    });
  request.execute(function (response) {
    if (response.error) {
      console.log('error happened in inserting!');
      console.log(response);
    }
    else {
      console.log('insert happened!');
      console.log(response);
    }
  });
}

function insertAllProperties(properties) {
  return function(event) {
    event.preventDefault();
    properties.forEach(function(property) {
      insertProperty(property);
    });
  }
}


document.getElementById('run').addEventListener('click', insertAllProperties(ALL_PROPERTIES));
