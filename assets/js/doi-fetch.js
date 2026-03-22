/**
 * DOI Metadata Fetcher
 * Finds elements with data-doi attribute, fetches metadata
 * from DOI.org content negotiation, and renders title/creators/abstract.
 *
 * Usage in Markdown:
 *   <div class="doi-metadata" data-doi="10.xxxx/yyyy"></div>
 */
document.addEventListener('DOMContentLoaded', function () {
  var doiElements = document.querySelectorAll('[data-doi]');

  doiElements.forEach(function (el) {
    var doi = el.getAttribute('data-doi').trim();
    if (!doi) return;

    // Show loading state
    el.innerHTML = '<span class="doi-loading">Loading metadata for DOI: ' + doi + '…</span>';

    // Use DOI content negotiation — works for DataCite AND CrossRef
    fetch('https://doi.org/' + encodeURIComponent(doi), {
      headers: { 'Accept': 'application/vnd.citationstyles.csl+json' }
    })
      .then(function (res) {
        if (!res.ok) throw new Error('DOI not found');
        return res.json();
      })
      .then(function (data) {
        var title = data.title || 'Untitled';
        // Handle title arrays (CrossRef) vs strings (DataCite)
        if (Array.isArray(title)) title = title[0];

        var creators = '';
        if (data.author && data.author.length) {
          creators = data.author.map(function (a) {
            if (a.literal) return a.literal;
            return [a.given, a.family].filter(Boolean).join(' ');
          }).join(', ');
        }

        var abstract = data.abstract || '';
        // Strip any JATS/HTML tags from abstract
        abstract = abstract.replace(/<[^>]*>/g, '');

        var html = '<div class="doi-title">' + title + '</div>';
        if (creators) {
          html += '<div class="doi-creators">' + creators + '</div>';
        }
        if (abstract) {
          html += '<div class="doi-abstract">' + abstract + '</div>';
        }
        html += '<div style="margin-top:0.5rem;font-size:0.8rem;">'
          + '<a href="https://doi.org/' + doi + '" target="_blank" rel="noopener">'
          + 'DOI: ' + doi + '</a></div>';

        el.innerHTML = html;
      })
      .catch(function () {
        el.innerHTML = '<span class="doi-loading">Could not load metadata for DOI: '
          + doi + '. <a href="https://doi.org/' + doi + '" target="_blank">View record →</a></span>';
      });
  });
});
