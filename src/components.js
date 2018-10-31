import hyperHTML from 'hyperhtml';
import avatar from './css/avatar.jpg';

export function Page(data) {
  const { header, experience, languages, links, skillsetURL } = data;
  return hyperHTML.wire()`
    <div class="wrapper">
      ${Header(header)}
      ${Experience(experience)}
      ${Skillset(skillsetURL)}
      ${Languages(languages)}
      ${Links(links)}
    </div>
  `;
}

function Header(head) {
  return hyperHTML.wire()`
    <section id="personal-info">
      <header>
        <div class="avatar">
          <img src="${avatar}" alt="Andrea Puddu">
        </div>
      </header>
      <div class="head">
        ${{html: head}}
      </div>
    </section>
  `;
}

function Experience(experience) {
  return hyperHTML.wire(experience, ':experience')`
    <section id="experience">
      <h2 class="title">Experience</h2>
      <ul class="experience">
      ${experience.map((e) => hyperHTML.wire(e)`
        <li>
          <h3>${e.position}</h3>
          <h4>${e.company}</h4>
          <em class="duration" title=${e.period.duration}>
            ${`${e.period.start} - ${e.period.end}`}
          </em> - ${e.period.location}
          ${{html: `<p>${e.description}</p>` }}
        </li>
      `)}
      </ul>
    </section>
  `;
}

function Skillset(skillsetURL) {
  // GET skillset from GitHub gist
  let skillsetRaw = '';
  return hyperHTML.wire()`
    <section id="skillset">
      <h2 class="title">Skillset</h2>
      <ul class="skillset">
      ${{
        any: fetch(skillsetURL)
            .then((response) => response.body.getReader().read())
            .then((result) => {
              const decoder = new TextDecoder();
              skillsetRaw += decoder.decode(result.value || new Uint8Array, {
                stream: !result.done
              });
              return skillsetRaw.split('\n');
            })
            .then((skills) => skills.map((skill) => hyperHTML.wire()`<li>${skill}</li>`)),
        placeholder: 'Loading…',
      }}
      </ul>
    </section>
  `;
}

function Languages(languages) {
  return hyperHTML.wire()`
    <section id="languages">
      <h2 class="title">Languages</h2>
      <p>${languages.join(', ')}</p>
    </section>
  `;
}

function Links(links) {
  return hyperHTML.wire()`
    <section id="links">
      <h2 class="title">Follow me on</h2>
      ${links.map((a) => hyperHTML.wire(a)`<a href=${a.href} title=${a.title} target="_blank">${a.title}</a>`)}
    </section>
  `;
}
