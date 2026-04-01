var xhr = new XMLHttpRequest();
var url = './news_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      var title = document.createElement('h2');
      title.textContent = article.title;

      var date = document.createElement('p');
      date.style.fontStyle = "italic";
      date.style.color = "#666";
      date.textContent = article.date;

      var description = document.createElement('p');
      description.textContent = article.description;

      var source = document.createElement('p');
      source.innerHTML = `<strong>Source:</strong> ${article.source}`;

      var category = document.createElement('p');
      category.innerHTML = `<strong>Category:</strong> ${article.category}`;

      // Key Points / Highlights
      var pointsHeader = document.createElement('h3');
      pointsHeader.textContent = 'Key Highlights:';

      var pointsList = document.createElement('ul');
      article.key_highlights.forEach(function(point) {
        var listItem = document.createElement('li');
        listItem.textContent = point;
        pointsList.appendChild(listItem);
      });

      // Implications / Why It Matters
      var implicationsHeader = document.createElement('h3');
      implicationsHeader.textContent = 'Why It Matters:';

      var implicationsList = document.createElement('ul');
      article.why_it_matters.forEach(function(item) {
        var listItem = document.createElement('li');
        listItem.textContent = item;
        implicationsList.appendChild(listItem);
      });

      // Append everything
      articleDiv.appendChild(title);
      articleDiv.appendChild(date);
      articleDiv.appendChild(description);
      articleDiv.appendChild(source);
      articleDiv.appendChild(category);
      articleDiv.appendChild(pointsHeader);
      articleDiv.appendChild(pointsList);
      articleDiv.appendChild(implicationsHeader);
      articleDiv.appendChild(implicationsList);

      articlesDiv.appendChild(articleDiv);
    });
};

xhr.send();