/**
 * ORCID Profile Fetcher
 * Finds elements with data-orcid attribute, fetches public profile
 * from the ORCID API, and renders name, affiliation, bio, and keywords.
 *
 * Usage in Markdown:
 *   <div class="orcid-profile" data-orcid="0000-0002-1234-5678"></div>
 */
document.addEventListener('DOMContentLoaded', function () {
  var orcidElements = document.querySelectorAll('[data-orcid]');

  orcidElements.forEach(function (el) {
    var orcid = el.getAttribute('data-orcid').trim();
    if (!orcid) return;

    el.innerHTML = '<span class="doi-loading">Loading ORCID profile…</span>';

    fetch('https://pub.orcid.org/v3.0/' + orcid, {
      headers: { 'Accept': 'application/json' }
    })
      .then(function (res) {
        if (!res.ok) throw new Error('ORCID not found');
        return res.json();
      })
      .then(function (data) {
        // --- Name ---
        var nameData = data.person && data.person.name;
        var givenName = '';
        var familyName = '';
        var displayName = orcid;
        if (nameData) {
          givenName = (nameData['given-names'] && nameData['given-names'].value) || '';
          familyName = (nameData['family-name'] && nameData['family-name'].value) || '';
          displayName = [givenName, familyName].filter(Boolean).join(' ') || orcid;
        }

        // --- Bio ---
        var bio = '';
        if (data.person && data.person.biography && data.person.biography.content) {
          bio = data.person.biography.content;
        }

        // --- Current affiliation (most recent employment) ---
        var affiliation = '';
        try {
          var employments = data['activities-summary']['employments']['affiliation-group'];
          if (employments && employments.length > 0) {
            var latest = employments[0].summaries[0]['employment-summary'];
            var org = latest.organization.name || '';
            var dept = (latest['department-name']) || '';
            var role = (latest['role-title']) || '';
            var parts = [role, dept, org].filter(Boolean);
            affiliation = parts.join(', ');
          }
        } catch (e) { /* no employment data */ }

        // --- Keywords ---
        var keywords = [];
        try {
          var kw = data.person.keywords.keyword;
          if (kw && kw.length) {
            keywords = kw.map(function (k) { return k.content; });
          }
        } catch (e) { /* no keywords */ }

        // --- Build HTML ---
        var html = '<div class="orcid-name">' + displayName + '</div>';
        if (affiliation) {
          html += '<div class="orcid-affiliation">' + affiliation + '</div>';
        }
        if (bio) {
          html += '<div class="orcid-bio">' + bio + '</div>';
        }
        if (keywords.length > 0) {
          html += '<div class="orcid-keywords">';
          keywords.forEach(function (kw) {
            html += '<span class="orcid-keyword">' + kw + '</span>';
          });
          html += '</div>';
        }
        html += '<div class="orcid-link">'
          + '<a href="https://orcid.org/' + orcid + '" target="_blank" rel="noopener">'
          + '<img src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png" '
          + 'alt="ORCID" style="width:14px;height:14px;vertical-align:middle;margin-right:4px;">'
          + 'orcid.org/' + orcid + '</a></div>';

        el.innerHTML = html;
      })
      .catch(function () {
        el.innerHTML = '<span class="doi-loading">Could not load ORCID profile. '
          + '<a href="https://orcid.org/' + orcid + '" target="_blank">View on ORCID →</a></span>';
      });
  });
});
