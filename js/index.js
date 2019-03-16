new Chartist.Line('.ct-chart', {
    labels: ['Mon'],
    series: [
      [2, 3, 2, 4, 5],
      [0, 2.5, 3, 2, 3],
      [1, 2, 2.5, 3.5, 4]
    ]
  }, {
    width: 500,
    height: 300
  });

var request;
  if (window.XMLHttpRequest) { // Mozilla, Safari, ...
    request = new XMLHttpRequest();
  } else if (window.ActiveXObject) { // IE
    try {
      request = new ActiveXObject('Msxml2.XMLHTTP');
    } 
    catch (e) {
      try {
        request = new ActiveXObject('Microsoft.XMLHTTP');
      } 
      catch (e) {}
    }
  }